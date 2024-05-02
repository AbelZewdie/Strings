const s = "The morning is upon us." 
// T is either 0 or -23


console.log(s.length) // 23 the length
// Index = length - 1


//SLICE
//string.slice(indexStart)
//string.slice(indexStart, indexEnd)

console.log(s.slice(12)) // "is upon us."
console.log(s.slice(-11)) // "is upon us."
console.log(s.slice(23)) // ""
console.log(s.slice(13, 16)) // "s u" ከ13 እስከ 16 ማለቱ ነው። 
console.log(s.slice(16, 13)) // "" because indexStart ከindexEnd ከበለጠ ምንም አይሰጠንም። 
console.log(s.slice(-8, -4)) // "upon"
console.log(s.slice(-8, 4)) // "" because indexStart ከindexEnd ከበለጠ ምንም አይሰጠንም። 
console.log(s.slice(8, -4)) // "ing is upon "

//SUBSTRING
//string.substring(indexStart)
//string.substring(indexStart, indexEnd)
console.log(s.substring(12)) // "is upon us."
console.log(s.substring(-11)) // "The morning is upon us." because negative number እንደ ዜሮ ነው የሚቆጠረው።
console.log(s.substring(23)) // ""
console.log(s.substring(13, 16)) // "s u"
console.log(s.substring(16, 13)) // "s u" because substring ቦታ ስለሚያቀያይርልን።
console.log(s.substring(-8, -4)) // "" ሁለቱንም እንደ 0 ነው የሚያያችው።
console.log(s.substring(-8, 4)) // "The " ከ0 እስከ 4 
console.log(s.substring(8, -4)) // "The morn" because -4 እንደ 0 ነው የሚያየው ከዛ ቦታ ያቀያይራችዋል።
