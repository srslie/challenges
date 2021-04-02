const bracketMatcher = string => {
  const counts = {
    '{': 0, 
    '(': 0, 
    '[': 0,
    '}': 0, 
    ')': 0, 
    ']': 0
  }
  
  let arr = string.split('')
  arr.forEach(char => {
    counts[char]++ 
  })
  return counts['{'] === counts['}'] 
    && counts['('] === counts[')'] 
    && counts['['] === counts[']'] 
}

// # Bracket Matcher

// ## Prompt

// Ever wonder how your linter knows if you have matching brackets? Well it's time to think of a solution to that!

// Given a set of brackets, `[, {, (`, create a function that determines if the brackets are well-formed (match) or not - even with bracket nesting. For example:

// ```javascript
// bracket("{}");

// // => true
// ```

// ```javascript
// bracket("{(");

// // => false
// ```

// ```javascript
// bracket("{()}");

// // => true
// ```

// ```javascript
// bracket("{[)][]}");

// // => false
// ```

// ```javascript
// bracket("]");

// // => false
// ```

// ```javascript
// bracket("({[]}{[]})");

// // => true
// ```



//
// import bracketMatcher from "./bracketMatcher";

// describe("Bracket Matcher", () => {
//   test("()", () => {
//     expect(bracketMatcher("()")).toEqual(true);
//   });
//   test("[]", () => {
//     expect(bracketMatcher("[]")).toEqual(true);
//   });
//   test("{}", () => {
//     expect(bracketMatcher("{}")).toEqual(true);
//   });
//   test("{(", () => {
//     expect(bracketMatcher("{(")).toEqual(false);
//   });
//   test("{}{)}", () => {
//     expect(bracketMatcher("{}{)}")).toEqual(false);
//   });
//   test("{}{)", () => {
//     expect(bracketMatcher("{}{)")).toEqual(false);
//   });
//   test("{()}", () => {
//     expect(bracketMatcher("{()}")).toEqual(true);
//   });
//   test("({[]}{[]})", () => {
//     expect(bracketMatcher("({[]}{[]})")).toEqual(true);
//   });
// });
// //