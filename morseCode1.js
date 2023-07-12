  var words = morseCode.trim().split("   ");
  var result = new String();

  for(let i=0;i<words.length;i++) {
    var word = words[i];
    var letters = word.split(" ");
    for(let j=0;j<letters.length;j++) {
      result = result.concat(MORSE_CODE[letters[j]]);
    }
    if (i<words.length-1) result = result.concat(" ");
  }
  return result;


  decodeMorse = function(morseCode){
  // Your code here
  // You can use MORSE_CODE[morse]
  var tweaked = morseCode.trim().replaceAll("   ","***");
  const regex = /(?<char>([.\-]+)|(?<space>\*\*\*))/g;
  const results = tweaked.matchAll(regex);

  var s = new String();
  for(let result of results) {
      if(result.groups["space"]) s=s.concat(" ");
      else s=s.concat(MORSE_CODE[result[0]]);
  }
  return s;  
}

