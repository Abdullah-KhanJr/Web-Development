console.log("Inserting Removing Elements Using JS")


// Give the innerHTML of selected class
// outerHTML give the class itself and its innerHTML
document.querySelector(".container").innerHTML
document.querySelector(".container").outerHTMLHTML

// .hidden (by deafult false can set to true and will hide the content)
document.querySelector(".box").hidden   // return false
document.querySelector(".box").hidden = true    //hidden

// Changing innerHTML
document.querySelector(".container").innerHTML = "This is a BOX"

//  Check if an element has the attribute
document.querySelector(".container").hasAttribute("style")
// Display the attribute
document.querySelector(".container").getAttribute("style")
document.querySelector(".container").setAttribute("style", "display: inline")

//**** Enable Editing on Any Website ****//
document.designMode = "on"

// Inserting at the end

let div = document.createElement("div");
div.innerHTML = "This is added through <b>JavaScript</b>" 
div.setAttribute("class", "created");
document.querySelector(".container").append(div)
// Other are before prepend after etc


// Inserting HTML before div(beforebegin) after div(afterbegin) (beforeend) (afterend)
let str = document.querySelector(".container")
str.insertAdjacentHTML("beforebegin", "Inserted HTML")
// Same pattern for Text and Element
// str.insertAdjacentElement
// str.insertAdjacentText

// Getting all the classes
document.querySelector(".container").classList
// Getting class name
document.querySelector(".container").className

// Removing and adding classes to classlist
document.querySelector(".container").classList.add("Sigma")
document.querySelector(".container").classList.remove("Sigma")

// Add class if not present, remove class if prresent
document.querySelector(".container").classList.toggle("Sigma")