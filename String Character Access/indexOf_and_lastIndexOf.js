const s = "The code undefined code code !";

//indexOf
//string.indexOf(searchString)
//string.indexOf(searchString, position)

console.log(s.indexOf("Code")) // -1
console.log(s.indexOf("code")) // 4 because of index | started counting from 0
console.log(s.indexOf("code", 4)) // 4
console.log(s.indexOf("code", 5)) // 19 - the second code
console.log(s.indexOf("code", -5)) // 4 because if it is a negative number it's gonna be counted as "0"
console.log(s.indexOf("")) // 0 - because there is an empty string at 0
console.log(s.indexOf()) // 9 but it's undefined, it should of been -1.

console.log("")
console.log("")

//lastIndexOf
//string.lastIndexOf(searchString)
//string.lastIndexOf(searchString, position)

console.log(s.lastIndexOf("Code")) // -1 because of the capital letter
console.log(s.lastIndexOf("code")) // 24 because it starts from the back
console.log(s.lastIndexOf("code", 24)) // 24 because the last code starts from 24
console.log(s.lastIndexOf("code", 23)) // 19 because we're going backward, the second code is 19
console.log(s.lastIndexOf("code, -5")) // -1 because there is nothing backwars after 0
console.log(s.lastIndexOf("")) // 30 because 29 is the last number and 30 is the index or the empty space
console.log(s.lastIndexOf()) // 9 but it's አጋጣሚ እንጂ undefined ባይኖር ኖሮ -1 ነበር የሚሆነው።
