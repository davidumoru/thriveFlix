function palindrome(string) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = string.replace(/[\W_]/g, "").toLowerCase();

  // Compare cleaned string with reverse
  const reversedString = cleanedString.split("").reverse().join("");

  // Check if the cleaned string equals its reverse
  if (cleanedString === reversedString) {
    return true;
  } else {
    return false;
  }
}

palindrome("string");