/*
Create an algorithm that takes in an integer and writes that number out in English words.
- all words should be lower case
- there should be a space between each word
- there's no need for the word 'and' to be included
ex) 101 should return "one hundred one"
    22222 should return "twenty two thousand two hundred twenty two"
*/

const numToWords = num => {
  const getPlaceAndRemainder = divisor => [Math.floor(num/divisor), num % divisor]
  
  const makeString = (divisor, word) => {
    const [place, remainder] = getPlaceAndRemainder(divisor)
    const string = `${numToWords(place)} ${word}`
    return (remainder !== 0 ) ? `${string} ${numToWords(remainder)}` : `${string}`
  }
  
  switch (true) {
    case (num >= 0 && num < 20):
      const ones = [ 
        'zero', 
        'one', 
        'two', 
        'three', 
        'four', 
        'five', 
        'six', 
        'seven', 
        'eight', 
        'nine', 
        'ten', 
        'eleven', 
        'twelve', 
        'thirteen', 
        'fourteen', 
        'fifteen', 
        'sixteen', 
        'seventeen', 
        'eighteen', 
        'nineteen'
      ]
      return ones[num]
    case (num < 100):
      const tens = [ 
        '', 
        '', 
        'twenty', 
        'thirty', 
        'fourty', 
        'fifty', 
        'sixty', 
        'seventy', 
        'eighty', 
        'ninety' 
      ]
      const [place, remainder] = getPlaceAndRemainder(10)
      return (remainder !== 0) ? `${tens[place]} ${numToWords(remainder)}` : tens[place]
    case (num < 1000):
      return makeString(100, 'hundred')
    case (num < 1000000):
      return makeString(1000, 'thousand')
    case (num < 1000000000):
      return makeString(1000000, 'million')
  }
  
  return 'Sorry, number is negative or too large for this lazy programmer.'
}

// numToWords(4)
// numToWords(16)
// numToWords(20)
// numToWords(45)
// numToWords(301)
// numToWords(622)
// numToWords(4000)
// numToWords(4244)
// numToWords(6570)
// numToWords(155990)
// numToWords(6639955)
// numToWords(82102713)
// numToWords(9000000000)
