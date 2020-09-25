/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

*/

//my solution

function solution(roman){
  let total = 0;
  let arrNum = []

  const key = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  for (var i = 0; i < roman.length; i++ ) {
     if (i === (roman.length - 1)) {
        total += key[roman[i]];
         } else if (key[roman[i]] >= key[roman[i+1]]) {
           total += key[roman[i]];
           console.log(total)
         } else if (key[roman[i]] < key[roman[i+1]]) {
           total = total - (key[roman[i]]);
           console.log(total)
         }
    };
    return total
  };

//other Solutions

function solution(roman) {
  var value = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
  return roman.split('').map( d => value[d] ).reduce( (s,v,i,o) => s + ( (o[i+1] > v) ? -v : v ), 0 );
}


//or

function solution(roman){
    var rom ={ "I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    return roman.split('').reverse().reduce(
        function(dec,c,i,rr){
            c=rom[c];
            i=rom[rr[i-1]]||0;
            return dec + (i<=c? c: -c) }
        ,0
    )
}

//or

function solution(roman){
  var memo = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
  };

return [...roman].map(a => memo[a]).reduce((a,b) => a < b  ? b - a : a + b)


}
