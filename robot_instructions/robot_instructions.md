You are working with a computer simulation of a mobile robot. The robot moves on an plane, and its movements are described by a command string consisting of one or more of the following letters:

G instructs the robot to move forward one step
L instructs the robot to turn left
R instructs the robot to turn right

The robot CANNOT go backwards - poor robot. After running all of the movement commands, you want to know if the robot returns to its original starting location.

For instance, the command GRGRGRG would make the robot return to its original starting location.
_____

- What assumptions will you make about this problem if you cannot ask any more clarifying questions? What are your reasons for making those assumptions?
  - I will assume that there's either a limit to how long of a command sequence the robot gets or there's a clear pattern to check.  
  - I will assume the robot has consistent step sizes
  - I will assume that 'in the same spot' is 'physically occupying the same square but perhaps turned in a different direction'
- What are your initial thoughts about this problem? (high level design, 2-3 sentences)
  - I think we'll have to somehow balance the number of steps to each direction (left, right, back, and forth) to test if the robot is in the same spot. 
  - brute force of tracking where it is through the whole process probably can be refined to some sort of rules that check patterns (number of L, R, G etc.)
- How would you identify the elements of this problem?
 - Searching of Data
   - intakes a string
 - Sorting of Data
   - check steps in each direction
 - Pattern Recognition
   - LG or RG is a step left of right, LL or RR turn 180 
 - Build/Navigate a Grid
   - x/y coordinates?
 - Math
   - see if can cancel out patterns?
 - Language API knowledge
  - check patterns?
 - Optimization
  - See if there are ways to cancel out patterns without running character by character space tracing
- Which data structure(s) do you think you'll use? What pros/cons do you see with that choice?
  - Probably an object with keys denoting steps left, right, forward, back or x/y coordinates
  - return checks if the values are all 0
- Write out a few lines of initial pseudocode: (mid-level design, NOT REAL CODE)
  - first approach is brute force, follow character by character where the robot is
  - set up an object that records the position of the robot
  - set up sorting of the string to break it down by step movements (break on the G)
  - iterate through the command string and for each character, modify the recorded position accordingly
  - check if it's in the starting (0,0) position (or steps forward===back, left===right, same dif)

  - create a test suite of commands and results ex:
    ```checkRobotResult('GRGRGRG') //true```