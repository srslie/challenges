/*
In this project, you will use what you know about iterating over arrays to improve the quality of a paragraph and gather some information about that paragraph.

This is the same type of work that word processing software does. Additionally, you may have heard of linting, a process by which text is evaluated and improved by an application. In this project, you will create a miniature version of a linter using array methods that you have learned.

Tasks

In the code editor, there is a string called story. We want to gather some information about the individual words and sentences in the string. Let’s split the string into individual words and save them in a new array called storyWords.

Log how many words there are in this story to the console.

There is an array of words that are unnecessary. Iterate over your array to filter out these words. Save the remaining words in an array called betterWords. There are several ways that you could achieve this.

There is an array of words called overusedWords. These are words overused in this story. You want to let the user of your program know how many times they have used these overused words. There are two ways to achieve this. Try it on your own first. If you need help, consult the hint.

Now, count how many sentences are in the paragraph.

This may seem tricky, but remember that all of the sentences in this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence counter variable for each word that has a period or exclamation mark as its final character.

Log these items to the console:

The word count
The sentence count
The number of times each overused word appears
You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting.

Now, log the betterWords array to the console as a single string.

Congratulations! You’ve improved the original paragraph and given the user some important information about his or her work. Think about ways in which you can extend this project, potentially by using other JavaScript knowledge you have.

Here are some ideas:

For the overused words, remove it every other time it appears.

Write a function that finds the word that appears the greatest number of times.

Replaced overused words with something else.
*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

const overusedWords = ['really', 'very', 'basically'];

const unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');

console.log('The word count is: ' + storyWords.length);

let betterWords = ''

function filterOut(words) {
  for (var i = 0; i < words.length; i++) {
  if (words[i] != 'extremely' && words[i] != 'literally' && words[i] != 'actually') {
     betterWords = betterWords + ' ' + words[i];
     } else {
       betterWords = betterWords;
     }
   }
};

filterOut(storyWords);

let overuseCount = 0

function countUse(words) {
  for (i =0; i < words.length; i++) {
    if (words[i] === 'really' || words[i] === 'very' || words[i] === 'basically') {
    overuseCount = overuseCount + 1
    } else {
    overuseCount = overuseCount;
    }
  }
  return overuseCount;
};

console.log('The number of times overused words appear is: ' + countUse(storyWords));

function countSentences(text) {
  const someSentences = text.split('!');
  const otherSentences = text.split('.');
  const sentences = someSentences.concat(otherSentences);
  const sentenceCount = sentences.length;
  return sentenceCount;
};


console.log('The number of sentences is: ' + countSentences(story));

console.log(betterWords)
