console.log("JS Selection")

let Boxes = document.getElementsByClassName("box")
console.log(Boxes)

Boxes[2].style.backgroundColor = "red"

let BoxID = document.getElementById("red")
BoxID.style.backgroundColor = "blue"

// Query Selector
// Select first class with classname box
document.querySelector(".box").style.backgroundColor = "green"
// Selectall classes
document.querySelectorAll(".box")
// To access all elements using for each loop
document.querySelectorAll(".box").forEach(val=> {
    // console.log(val)
    val.style.backgroundColor = "pink"
}) 

// Tags Selector
document.getElementsByTagName("div")

// if certain tag contains in the other
document.querySelector("body").contains(document.querySelector("body"))