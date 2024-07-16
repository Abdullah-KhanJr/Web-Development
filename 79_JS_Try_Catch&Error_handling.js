console.log("JavaScript try catch & Error Handling");

let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError ("Only number allowed")
}

let sum = parseFloat(a) + parseFloat(b)

// Sum NaN if string are passed
// try {
//     console.log(`Sum is ${x}`)
// } catch {
//     console.log("Error hai bhai ERROR");   
// } finally {
//     console.log("Run");
// }

// Use of final {}

function main () {
    try {
        console.log(`Sum is ${sum}`)
        return true
    } catch {
        console.log("Error hai bhai ERROR");
        return false   
    } finally {
        // Normally a function terminates after return but finally {} block will run even after return
        console.log("Run");
    }
}

main ()