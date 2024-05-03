
const str = "Cats are the best!"

// STARTS With
// string.startsWith(searchString);
// string.startsWith(searchString, position) 

console.log(str.startsWith("Cats")) // "True" | It starts with Cats.
console.log(str.startsWith("cats")) // "False" | It's case sensetive.
console.log(str.startsWith("are")) // "False" | 
console.log(str.startsWith("are", 5)) // "True" | are starts at index #5

// ENDS With
// string.endsWith(searchString)
// string.endsWith(searchString, length) the length is 18

console.log(str.endsWith("best!")) // "True" 
console.log(str.endsWith("best")) // "False" | there is "!" at the end.
console.log(str.endsWith("best", 17)) // "True" | 