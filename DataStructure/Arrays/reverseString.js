/* ************* METHOD 1*/
function reverse(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

/* ************* METHOD 2 */
function reverse2(str) {
  //check for valid input
  return str.split("").reverse().join("");
}

/* ************* METHOD 3*/
const reverse3 = (str) => [...str].reverse().join("");

/* ************* METHOD 4 */
function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}

const reversed = reverseString("Hello, World!");
console.log(reversed); // Output: !dlroW ,olleH

reverse("Timbits Hi");
reverse("Timbits Hi");
reverse3("Timbits Hi");
reverseString("Hello World");
