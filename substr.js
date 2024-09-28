
const title = "Guards! Guards!";
// use console.log(); to see the output
console.log(title.substring(3)); //> prints 3rd index to the end.
console.log(title.substring(6, 4)); //> Begins at 6 index and 4 is the chacracter count.
console.log(title.substring(25)); //> 25 is out of range so it prints empty string.
console.log(title.substring(0)); //> prints from zero 
console.log(title.substring(0, 1)); //> prints 0th index and 1 chacracter count. 1 is not included.
console.log(title.substring(0, 3)); //> prints 0th index and 3 chacracter count. 3 is not included.
console.log(title.substring(8, 16)); //>? 