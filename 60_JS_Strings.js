console.log ("Javascript Strings")

let a = "Web Dev"
let b = "Sigma "

console.log (a)
console.log (a[4])
console.log (a[12]) // Undefined
console.log(a.length)

console.log (a + " " + b)
// Template Literals
console.log (`Course: ${a} ${b}`)

console.log(a.toUpperCase())
console.log(a.toLowerCase())

// Certain Portion
console.log(b.slice(1,4)) // 4 not included
console.log(b.slice(1)) // 1 to end of string

//Replace
console.log(a.replace("Dev", "Development"))
// Only Replace the first occurence
console.log (a.replace ("e", "X"))

//Catenation
console.log(b.concat(a));
console.log(b.concat(a, "elopment", " Course"));

//Remove white Spaces (begining and end)
let c = "  Development   "
console.log(c.trim())
console.log(c)

