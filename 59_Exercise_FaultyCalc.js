console.log("Faluty Calculator")

let random = Math.random()
let a = prompt("Enter First Number: ")
let b = prompt("Enter Second Number: ")
let c = prompt("Enter Operation Number: ")

// Chaniging operations

let Obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}


// eval -> Caulculate
if (random > 0.9) {
    alert(`Result: ${eval(`${a} ${c} ${b}`)}`) // Alert Bar
    console.log(`Result: ${a} ${c} ${b}`) // Only Prints as it is
} else {
    // c = Wrong Operations
    c = Obj[c]
    alert(`Result: ${eval(`${a} ${c} ${b}`)}`)
    console.log(`Result: ${a} ${c} ${b}`)
}