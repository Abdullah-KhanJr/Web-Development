console.log("JS Functions")

function WEBDEV (name) {
    console.log("This is " + name + " Course")
}

WEBDEV ("Sigma")

function sum (a,b) {
    return a+b;
}

console.log("Sum is: ", sum(3,5))

function not_aNumber (a,b,c) {
    console.log (a,b,c = 5)

    return a + b +c
} 

not_aNumber (5)
console.log (not_aNumber)

//Function + Variable (Arrow Function)

const func1 = (x)=>{
    console.log("Arrow Function: ", x)
}

func1(30);
func1(43);