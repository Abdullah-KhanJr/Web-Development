console.log("JS Async Awaits & Fetch API");

// async function getData() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("Resolved Called...")
//         }, 3000);
//     })
// }

async function getData() {
    // Stimulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com//todos/1')
    let data = await x.json()
    console.log(data)
    return 455
    
}

async function main() {

    console.log("Loading Data");
    console.log("... ... ...");
    console.log("Load Data");

    let data = await getData()
    
    console.log(data);
    
    console.log("Processing Data");
    console.log("Still Processing");
    console.log("... ... ...");
    
}

main ()