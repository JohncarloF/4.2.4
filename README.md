# 4.2.4 String indexing, escaping, and template literals

### Template literal 
A JavaScript feature that makes string concatenation, embedded expressions, and formatting easier

'''javascript
const pangram = "The Five Boxing Wizards Jump Quickly.";
'''

## First Task

I want to update the string so that everthing but the frist letter is a lowercase. How can I do this? It's best to follow these steps:

1. Make sure that the first letter of the sentence is uppercase.

2. Make all other letters lowercase.

How do we do this? Try bracket notation:

'''javascript
const word = "Wizards";
word[0]; //> "W"
word[2]; //> "z"
word[9]; //> undefined
'''

It's tedious and super fun!!(Just kidding.)

Funcation Implementation 

Here's how we can achieve this:
'''javascript
function sentenceCase(sentence) {
  const firstCharacter = sentence[0];
  let result = firstCharacter.toUpperCase();

  for (let i = 1; i < sentence.length; i++) {
    const character = sentence[i];
    result += character.toLowerCase();
  }

  return result;
}
'''

### Steps Explained 

1. We create a function and pass the sentence as an argument.
2. We store the first character of the sentence in a variable.
3. We use the 'toUpperCase()' method to convert the first character to uppercase and store it in a variable called 'result'.
4. We use a for loop to iterate through the rest of the characters in the sentence.
5. We use the 'toLowerCase()' method to convert each character to lowercase and add it to the result variable.
6. We return the result variable.

Here's a new way to convert a string to sentence case using '''javascript substrings()''':
'''javascript 
function sentenceCase(sentence) {
  const first = sentence.substring(0, 1);
  const rest = sentence.substring(1);

  return first.toUpperCase() + rest.toLowerCase();
}
'''
# Steps Explained

1. It sets the first variable to be equal to only the first character. In other words, substring(0, 1) means that the substring will begin on index 0 and include only 1 character.

2. It sets the rest variable to be equal to every character starting from the first index. If you do not include a second argument, like in substring(1), the substring will consist of every character following the given index.

3. It joins the two strings together, using toUpperCase() and toLowerCase() as appropriate.

## Splitting and joining strings
First we will speak about '''javascript titleize()'''. Turns a pharse into a title.

### Ex:
'''javascript 
    const title = "the light FANTASIC";
    titleize(title); //> "The Light Fantastic";
'''
### Split and join
'''javascript
function titleize(title) {
    const words = title.split(" ");
   let result = [];
   for (let i = 0; i < words.length; i++) {
    const capitalized = sentenceCase(word[i]);
    result.push(capitalized);
   }
   return result.join(" ");
}
titleize("the light FANTASIC"); //> "The Light Fantastic";
'''
# Steps Explained
