console.log("Loops")

for (let i = 0; i <= 10; ++i) {
    console.log(i) 
}

// For in Loop: Used for keys and elements of object

let Obj = {
    name: "Harry",
    Role: "Model"
}

for (key in Obj) {
    element = Obj[key]
    console.log(element)
}

let Obj2 = {
    name: "Kane",
    Role: "No Model"
}

for (const keys in Obj2) {
    const elements = Obj2[keys]
    console.log(keys, elements)
    console.log(elements, keys)
}

// For of: Iterator in array/ string

for (const c of "Harry") {
    console.log(c)
}

//While Loop
let j = 5

while (j < 10) {
    console.log(j)
    j++
}

// Do While

let g = 30

do {
    console.log(g)
    g++;
} while (g<32)