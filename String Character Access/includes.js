
const sentence = "The quick brown fox jumps over the lazy dog.";

//INCLUDES
//string.includes(searchString)
//string.includes(searchString, position)

console.log(sentence.includes("Fox")); // "False" | includes is case sensetive.
console.log(sentence.includes("fox")); // "True" | there is a fox in the sentence.
console.log(sentence.includes("fox", 0)); // "True" | Starts searching from index 0.
console.log(sentence.includes("fox", 16)); // "True" | fox starts from 16.
console.log(sentence.includes("fox", 17)); // "False" | there is no fox after index #17.