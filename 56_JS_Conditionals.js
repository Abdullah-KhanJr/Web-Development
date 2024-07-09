console.log ("Conditional Tutorial")

let age = 54;

if (age > 18) {
    console.log("You can Drive")
} else {
    console.log ("You can't")
}

// Js Extras

// Exponent
console.log(7**2) //49
// Value Check: ==
// Type + Value Check: ===
console.log(4 === 4) // true // false i any not met
// Type + Value Not Equal: !==
console.log(4 !== age)

console.log(3 == "3")
console.log(3 === "3")

//Ternary
let a = 6
let b = 7

//     if(a>b)->print(a-b)->else(b-a)
let c = a>b ? (a-b) : (a+b)
console.log(c)