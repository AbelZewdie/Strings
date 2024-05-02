const string = "The morning is upon us.";

//SPLIT
//string.split()
//string.split(seperator)
//string.split(seperator, limit)

console.log(string.split()) // No split gonna happen.
console.log(string.split(" ")) // The words gonna be separated by space because our separator is space.
console.log(string.split(""))
console.log(string.split("o")) // o ያለበትን ይየፈለገ መከፋፈልና oን ማጥፋት። because the separator not gonna include.
console.log(string.split("o", 2))
console.log(string.split("o", 0))