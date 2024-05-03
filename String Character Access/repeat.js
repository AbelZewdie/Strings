
const str = "abc";

// Repeat
//string.repeat(count)

console.log(str.repeat(0)); // 0 | nothing gonna be repeated
console.log(str.repeat(1)); // abc | repeated one time
console.log(str.repeat(2)); // abcabc | repeated 2 times
console.log(str.repeat(3.5)); //abcabcabc | repeated 3 times | ignores the decimal
console.log(str.repeat(-1)); //rangeerror | don't accept negative number
console.log(str.repeat(1/0)); //rangeerror | don't accept frictions
