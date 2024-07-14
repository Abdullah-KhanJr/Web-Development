console.log("JS Events EventBubbling setInterval & setTiemout")

let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "HTML Changed"
})

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "BOX"
})

// When child is clicked, childContainer and container2 is automatically clicked
// To stop it, .stopPropagation() is used 
document.querySelector(".child").addEventListener("contextmenu", (val)=>{
    val.stopPropagation()
    alert("CHILD was clicked")
})

document.querySelector(".childContainer").addEventListener("contextmenu", ()=>{
    alert("childContainer was clicked")
})

document.querySelector(".container2").addEventListener("contextmenu", ()=>{
    alert("Container was clicked")
})

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1}, ${val2}, ${val3})`
} 

setInterval(() => {
    document.querySelector(".childContainer").style.background = getRandomColor();
}, 100);

// let a  = setTimeout(() => {
//     document.querySelector(".childContainer").style.background = getRandomColor();
// }, 1000);

// console.log(a)