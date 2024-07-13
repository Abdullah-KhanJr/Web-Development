console.log ("Exercise | Color The Boxes")

let Boxes = document.querySelector(".container").children

function getRandomColor() {
    // ciel=> round off to biggest integer
    // (0 + Math.random() * 255) generate random number b/w 0-255
    let val_1 = Math.ceil(0 + Math.random() * 255)    
    let val_2 = Math.ceil(0 + Math.random() * 255)    
    let val_3 = Math.ceil(0 + Math.random() * 255)    

    return `rgb(${val_1}, ${val_2}, ${val_3})`
}

Array.from(Boxes).forEach(val=>{
    val.style.backgroundColor = getRandomColor()
    val.style.color = getRandomColor()
})