const missingNO = (a, m) => {
  let missing = []
  let sa = a.sort((a, b) => a - b )
  
  const search = (start, end) => {
    if (end - start === 0) {
      missing.push(start + 1)
      sa.splice(start, 0, start + 1)
      return
    }
    
    let midpoint = Math.floor((start + end)/2) 
    let correctValue = midpoint + 1
    
    if (a[midpoint] === correctValue) {
      search(midpoint + 1, end)    
    } else {
      search(start, midpoint)
    }
  }
  
  for (let i = 0; i < m; i++) {
    search(0, sa.length)
  }
  return missing
}

const numbers = [1, 2, 3, 7, 9, 10 ] 
//2, 8
//a = numbers, m = 2

missingNO(numbers, 3)


//https://discuss.codecademy.com/t/challenge-find-the-missing-number/221144