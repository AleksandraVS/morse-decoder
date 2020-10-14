const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let reg = /[0,1,*]{10}/g;
    let arr = expr.match(reg);
    let temp = "";
  
   for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] !== "**********") { 
      arr[i] = arr[i].substring(arr[i].indexOf("1"));
    }
    else arr[i] = " ";
  }
   reg = /[10,11]{2}/g;
  
   for (let i = 0; i < arr.length; i++) 
  { 
    let tempArr = [];
     if (arr[i] !== " ") 
   {
    tempArr = arr[i].match(reg);
    for (let j = 0; j < tempArr.length; j++) 
   {
    if (tempArr[j] == "10") 
    tempArr[j] = ".";
    else tempArr[j] = "-";
   }
  
   for (let j = 0; j < tempArr.length; j++)
   temp += tempArr[j];
  
   arr[i] = temp;
   temp = "";
  
  }
  
  for (let i = 0; i < arr.length; i++) {
  for (let code in MORSE_TABLE) {
    if (arr[i] === code)
    arr[i] = MORSE_TABLE[code];
  }
  }
  }
  for (let i = 0; i < arr.length; i++)
  temp += arr[i]; 
  return temp;
  }
  

module.exports = {
    decode
}