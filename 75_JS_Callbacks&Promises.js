// console.log("JS Callbacks & Promises")

// console.log("Print first")
// console.log("Print second")

// setTimeout (()=>{
//     console.log("Print after X second")
// }, 0)

// console.log("Print Before setTimeout")

// Callbacks Should be done later

// Promises
console.log("Promises");

let prom1 = new Promise((resolve, reject)=>{

    let a = Math.random()
    if (a > 0.5) {
        reject("Rejected It")
    }
    setTimeout(() => {
        console.log("Yes, I am called");
        resolve("Sigma")
    }, 1000)
})

prom1.then((a)=>{
    console.log(a);  
}).catch((error)=>{
    console.log(error);
    
})