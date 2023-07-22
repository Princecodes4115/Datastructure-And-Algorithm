function reverseString(str) {
  if (str.length === 0) {
    return "";
  } else {
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
  }
}

const reversedString = reverseString("hello world");
console.log(reversedString); // "dlrow ,olleh"

function reverseString2(str) {
  const reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

const reversedString2 = reverseString("hello world");
console.log(reversedString); // "dlrow ,olleh"
