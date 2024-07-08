console.log("Hello")

var a = 5;
var b = 10;
var c = "World";

console.log(a)

// let: block scope

{
    let a = 12;
    console.log(a)
}

console.log(a + b + 20)
console.log(typeof a, typeof c)

let e = "Sigma Course";
let f = 22;
let g = 22.22;
const h = true;
let i = undefined;
let j = null;

console.log(e, typeof e)
console.log(f, typeof f)
console.log(g, typeof g)
console.log(h, typeof h)
console.log(i, typeof i)
console.log(j, typeof j)


// Objects

let Obj = {
    "Name": "Harry",
    "Job Type": "L3",
    Salary: 170000
}

console.log(Obj)
Obj.Education = "Bachelors"
console.log(Obj)
