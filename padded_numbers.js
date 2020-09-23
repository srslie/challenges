/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Any test will have a number and you need to make sure it's a 5 digit number returned, with 0s if it's empty ahead of a number.
Example:

solution(5) // should return "Value is 00005"

https://www.codewars.com/kata/reviews/5458800054d8fef398000208/groups/5f6a4f8ee6d0d800017fd066
*/

//my solution

function solution(value){
 newValue ='00000' + value;
 return 'Value is '+ newValue.slice(-5)
};

//other good solutions:

function solution(value){
  return "Value is " + ("00000" + value).slice(-5);
}

//or

const solution = value => 'Value is ' + value.toString().padStart(5, '0');

//or

function solution(value){
  return `Value is ${value.toString().padStart(5,'0')}`
}

//or

const solution = value =>
  `Value is ${`${value}`.padStart(5, `0`)}`;

//or

function solution(value){
  return "Value is " + ("00000" + value).substr(-5)
}
