var decodeBits = function(bits){
    // string definition 
    console.log("input " + bits);
    const regex = /(1+)|(0+)/g;
    var set = new Set();
    var arr = new Array();
    var largest = 0;
    
    let myArray;
    //have to do this as this version of js doesnt support matchAll()!
    while ((myArray = regex.exec(bits)) !== null) {
      if (arr.length==0 && myArray[0].charAt(0)=='0') continue; //skip leading zeros
      arr.push(myArray[0]); // first element is the text found
    }
    
    if (arr[arr.length-1].charAt(0)=='0') arr.pop(); //trim trailing zeros
    for(let j=0;j<arr.length;j++) set.add(arr[j].length); // figure out range of lengths
    largest = arr.reduce((largest, currentValue) => (largest < currentValue.length) ? currentValue.length:largest,0);
      
    var transmissionRate;
    if (set.size==1) transmissionRate = largest; //special case for single letter
    else  if ((largest % 7) == 0 ) transmissionRate = largest / 7;
    else if ((largest % 3) == 0 ) transmissionRate = largest / 3;
    else transmissionRate = largest;
    
    var str = new String();
    for(let i=0;i<arr.length;i++) {
        let l = arr[i].length / transmissionRate;
      if (arr[i].charAt(0)=='1') {
            switch (l) {
                case 3: str = str.concat("-");
                break;
                default: str = str.concat(".");
            }
        } else {
            switch (l) {
                case 7: str = str.concat("   ");
                break;
                case 3: str = str.concat(" ");
                break;
                default: str = str.concat("");
            }
        }
    }
    return str;
    
    }
    
    var decodeMorse = function(morseCode){
        // ToDo: Accept dots, dashes and spaces, return human-readable message
      return morseCode
        .trim()
        .split(/  | /)
        .map( (code) => MORSE_CODE[code] || ' ')
        .join('');
    }
    
    