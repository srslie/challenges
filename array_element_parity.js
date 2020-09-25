/*
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

URL: https://www.codewars.com/kata/5a092d9e46d843b9db000064/javascript
resources:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
*/

//my solution

function solve(arr){
  const uniqueArr = [...new Set(arr)];
  sum = uniqueArr.reduce((a, b) => a + b, 0);
  return sum
};


//other solutions

const solve=a=>a.find(e=>!a.includes(-e));

//or

const solve = array => array.find(value => !array.includes(-value))

//or

function solve(arr) {
  for (var i = 0; i < arr.length; i++)
    if (!arr.includes(-1 * arr[i])) return arr[i];
}

//or

function solve(arr){
  for (var i in arr) {
    currentNumber = arr[i];
    negativeNumber = 0 - currentNumber;
    if (!arr.includes(negativeNumber)) {
      return currentNumber;
    }
  }
};

//or

const _ = require('lodash'), solve = _.flow(_.uniq, _.sum);
