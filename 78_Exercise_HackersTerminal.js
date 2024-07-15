const addItem = async (item)=> {
    await RandomDealy()
    let div = document.createElement("div")
    div.innerHTML = item
    document.body.append(div)
}

const RandomDealy = ()=> {
   return new Promise((resolve, reject)=>{
       let timeOut = 1 + 5 *Math.random()
       setTimeout (()=>{
           resolve()
       }, timeOut * 1000) 
   })
}

async function main () {
    setInterval(() => {
        let dot = document.body.querySelector("div");
        if (dot) {
            if (dot.innerHTML.endsWith("...")) {
                dot.innerHTML = dot.innerHTML.slice(0, dot.innerHTML.length - 3);
            } else {
                dot.innerHTML += ".";
            }
        }
    }, 700);
    
    let text = ["Initializing Hacking",
        "Connecting to API",
        "Fetching Data",
        "Access Denied!"
    ]
    
        for (const item of text) {
            await addItem(item);
        }
}

main()