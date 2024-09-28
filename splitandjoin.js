const title = "Guards! Guards!";
// use console.log() to see what happens...
console.log(title.split("!")); //> erased the "!"s
console.log(title.split("")); //> erased the spaces
console.log(title.split("guards")); //> erased "guards" but theres no guards 
console.log(title.split("Guards")); //> erased "Guards" 

const titleArr = ["The", "Light", "Fantastic"];
console.log(titleArr.join("-")); //> added the "-"
console.log(titleArr.join("_-_")); //> added the "_-_"
console.log(titleArr.join()); //> added the ","
