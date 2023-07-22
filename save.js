import { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";

const WidgetContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const PlayerContainer = styled.div`
  margin-bottom: 20px;
`;

const TrackListContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

const TrackItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e2e8f0;
  cursor: pointer;
  &:hover {
    background-color: #edf2f7;
  }
`;

const Widget = () => {
  const [token, setToken] = useState(null);
  const [artistId, setArtistId] = useState(null);
  const [artistTracks, setArtistTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const getAccessToken = async () => {
      const client_id = "e2e433db67c34f5c874359191818d0e1";
      const client_secret = "fd4e1037a83e4e6a8de519d84a578669";

      const authOptions = {
        url: "https://accounts.spotify.com/api/token",
        headers: {
          Authorization: "Basic " + btoa(`${client_id}:${client_secret}`),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: new URLSearchParams({
          grant_type: "client_credentials",
        }).toString(),
      };

      try {
        const response = await axios.post(authOptions.url, authOptions.data, {
          headers: authOptions.headers,
        });

        if (response.status === 200) {
          setToken(response.data.access_token);
        }
      } catch (error) {
        console.error("Error retrieving access token:", error);
      }
    };

    getAccessToken();
  }, []);

  useEffect(() => {
    const searchArtist = async () => {
      if (token) {
        const artistName = "fireboy"; // Replace with the actual artist name

        try {
          const response = await axios.get(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(
              artistName
            )}&type=artist`,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );

          if (
            response.status === 200 &&
            response.data.artists.items.length > 0
          ) {
            setArtistId(response.data.artists.items[0].id);
          }
        } catch (error) {
          console.error("Error searching for artist:", error);
        }
      }
    };

    searchArtist();
  }, [token]);

  // ...

  useEffect(() => {
    const getArtistTracks = async () => {
      if (artistId && token) {
        try {
          const response = await axios.get(
            `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US&limit=30`,
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );

          if (response.status === 200) {
            const tracks = response.data.tracks;
            const allTracks = await getAllArtistTracks(artistId, tracks, token);
            setArtistTracks(allTracks);
            setCurrentTrackIndex(0); // Set the current track index to the first track
          }
        } catch (error) {
          console.error("Error retrieving artist tracks:", error);
        }
      }
    };

    getArtistTracks();
  }, [artistId, token]);

  useEffect(() => {
    if (currentTrackIndex !== null) {
      playerRef.current.addEventListener("ended", handleTrackEnded);
    }

    return () => {
      if (currentTrackIndex !== null) {
        playerRef.current.removeEventListener("ended", handleTrackEnded);
      }
    };
  }, [currentTrackIndex]);

  const handleTrackEnded = () => {
    setCurrentTrackIndex((prevIndex) =>
      prevIndex < artistTracks.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleTrackClick = (index) => {
    setCurrentTrackIndex(index);
  };

  return (
    <WidgetContainer>
      <h1 className="text-3xl font-bold mb-4">Spotify API</h1>
      {currentTrackIndex !== null && (
        <PlayerContainer>
          <iframe
            ref={playerRef}
            src={`https://open.spotify.com/embed/track/${artistTracks[currentTrackIndex].id}`}
            width="300"
            height="80"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </PlayerContainer>
      )}
      <h2 className="text-xl font-semibold mb-2">Artist Tracks:</h2>
      <TrackListContainer>
        {artistTracks.map((track, index) => (
          <TrackItem
            key={track.id}
            className={currentTrackIndex === index ? "bg-gray-100" : ""}
            onClick={() => handleTrackClick(index)}
          >
            {track.name}
          </TrackItem>
        ))}
      </TrackListContainer>
    </WidgetContainer>
  );
};

export default Widget;
