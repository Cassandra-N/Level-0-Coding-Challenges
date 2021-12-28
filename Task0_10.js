function getCommonLetters(string1, string2) {
  let string1Array = string1.split("");
  let string2Array = string2.split("");

  let commonLetters = [];

  for (let i = 0; i < string2Array.length; i++) {
    if (string1Array.includes(string2Array[i])) {
      commonLetters += string2Array[i];
      if (i >= 1 && i < string2Array.length - 1) {
        commonLetters += ",";
      }
    }
  }

  console.log("Common letters: " + commonLetters);
}

getCommonLetters("house", "computers");
