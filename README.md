# 4.2.4 
## String indexing, escaping, and template literals

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
### Steps Explained

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
### Steps Explained
1. We use the split() method to split the title string into an array of words.
2. We create an empty array called 'result' to store the capitalized words.
3. We use a for loop to iterate through each word in the array.
4. We use the sentenceCase() function to capitalize the first letter of each word and store it in a variable called 'capitalized'.
5. We use the push() method to add the capitalized word to the result array.
6. We use the join() method to join the words in the result array into a string with spaces between each word.
7. We return the result string.

## Template Literals 

'''javascript
const title = "Alice in Wonderland";
  const price = 9.50;
  console.log(title + " is on sale for $" + price + ".");
}

//> "Alice in Wonderland is on sale for $9.50."
'''
### Using template literals
'''javascript
const title = "Alice in Wonderland";
const price = 9.50;
console.log('${title} is on sale for $${price}.');
'''
### Steps Explained
1. We use backticks (```) to create a template literal.
2. We use ${} to insert the values of the variables title and price into the string.
3. We can also use template literals to create multi-line strings.

## Escaping strings

'''javascript
const title = "Alice's Adventures in Wonderland";
console.log(title);
//> "Alice's Adventures in Wonderland"
'''
### Steps Explained
1. We use the backslash (\) character to escape the single quote (') in the string.
2. This tells JavaScript that the single quote is part of the string, not the end of the string.
3. We can also escape other characters such as double quotes ("), backslashes (\), and newlines (\n).

## Assessment 

### Explanation:
Function Definition:

The function listAllItems takes a single parameter products, which is expected to be an array of product objects.
Check for Empty or Undefined Array:

The first if statement checks if the products array is either not provided (!products) or is empty (products.length === 0).
If either condition is true, the function returns the string "There are no items for sale."
Get the Number of Items:

The variable itemCount is assigned the length of the products array, which represents the number of items.
Create an Array of Item Names:

The itemNames array is created by mapping over the products array and extracting the name property from each product object.
Handle Different Cases Based on the Number of Items:

One Item: If itemCount is 1, the function returns a string indicating there is 1 item for sale, followed by the item's name.
Two Items: If itemCount is 2, the function returns a string indicating there are 2 items for sale, followed by both item names separated by "and".
More Than Two Items: If itemCount is greater than 2, the function returns a string indicating the total number of items for sale, followed by all item names separated by commas.
Export the Function:

The function is exported using module.exports so that it can be used in other files or for testing purposes.
This code ensures that the output message is correctly formatted based on the number of items in the products array.
