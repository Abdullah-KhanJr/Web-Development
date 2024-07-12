console.log ("Javascript Arrays")

// let arr = [1,2,3,4,5]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[3])

// // Changing elements

// arr[3] = 40
// console.log(arr)
// console.log(typeof arr)

// console.log(arr.toString()) // Converted to string

// // Replace comma by and
// console.log(arr.join(" and "))

// arr.pop()
// console.log(arr)

// arr.push(100)
// console.log(arr)

// // Can also add string
// arr.push("WEBDEV")
// console.log(arr)

// // To remove the first element
// arr.shift()
// console.log(arr)
// // To add to the begining of an array
// arr.unshift("Sigma")
// console.log(arr)

// // delete keyword delete the specified element but memory is still allocated
// delete arr[5]
// console.log(arr)
// console.log(arr.length) // print 6 as memory is still alloacated

// let a1 = [1,2,3,4]
// let a2 = [5,6,7]
// let a3 = [8,9,0]

// console.log(a1.concat(a2, a3))

// let arr2 = [5,2,8,3,7,2,5,3]
// arr2.sort()
// console.log(arr2)

// a3 = [2,3,4,5,6,7]
// console.log(a3)
// // a3.splice(1,3) // splice from index 1 to index 3 (both included)
// a3.splice(1,3, 222, 333) // splice the numbers and add 222, 333 in place of the numbers spliced
// console.log(a3)

// a1 = [1,2,3,4,5,6,7]
// a1.slice(2,5) // return a new array from index 1 to 5
// console.log(a1)

// a1.reverse() //reverse the original array
// console.log(a1)

let a = [1,2,3,4,5,6]

for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}

a.forEach((value, index, a)=>{
            // value, index, array
    console.log(value, index, a)
})

Obj = {
    a:1,
    b:2,
    c:3
}

for (const key in Obj) {
    if (Object.hasOwnProperty.call(Obj, key)) {
        const element = Obj[key];
        console.log(key, element)
        
    }
}

for (const element of a) {
    console.log(element)
}

let arr = [4,5,8,2,6,3,9]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]**2)
// }


// Do the same function as the upper loop
let newArr = arr.map((val)=> {
    return val**2
})

console.log(newArr)

const greaterThan30 = (val)=> {
    if (val > 30) {
        return true;
    }
    return false;
}

console.log(newArr.filter(greaterThan30))

let arr3 = [1,2,3,4,5]

function red (a,b) {
    return a*b
}

console.log(arr3.reduce(red))

// Array from string or object
let course = "Sigma"
console.log(Array.from(course))