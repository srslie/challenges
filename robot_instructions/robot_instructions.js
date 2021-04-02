const checkRobotResult = commands => {
  /*
    can probably do a check here, if odd number of steps G than cannot be true
    but since this iterates through all the in a filter, maybe not efficent to do?
  
    if (commands.split('').filter(c => c === 'G').length % 2 !=== 0) {
      return false
    }
  
    also possible to replace every 'LR' or 'LR' next to each other with an empty string   to cut down on number of character steps needed to go through
    since those cancel each other out
    
    const cancelledOut = commands.replaceAll('LR', '').replaceAll('RL', '')
    */
  
    const location = {
      x: 0,
      y: 0,
      dx: 1,
      dy: 0
    }
 
    const steps = commands.split('')
    // console.log(steps)
  
    steps.forEach((character, i) => {
      const dxo = location.dx
      const dyo = location.dy
      switch (character) {
        case 'G':
          location.x += location.dx
          location.y += location.dy
          break;
        case 'R':
          location.dx = dyo * -1
          location.dy = dxo
          break;
        case 'L':
          location.dx = dyo
          location.dy = dxo * -1
          break;
      }
      // console.log('step', i, location)
    })
    
    if (location.x === 0 && location.y === 0 ) {
      return true
    }
  
    return false
  }
  
  checkRobotResult('GRGRGRG') //true
  // checkRobotResult('GRGR') //false
  // checkRobotResult('RL') //true
  // checkRobotResult('GG') //false
  // checkRobotResult('GGG') //false
  // checkRobotResult('GGGG') //false
  // checkRobotResult('GRRG') //true
  // checkRobotResult('LRLLLLL') //true
  // checkRobotResult('LRLLRRRLLLRRRGLRGLLG') //false
  