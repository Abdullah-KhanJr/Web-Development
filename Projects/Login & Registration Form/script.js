let signupBtn = document.getElementById("signup-btn");
let signinBtn = document.getElementById("signin-btn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

signinBtn.onclick = function() {
    namefield.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function() {
    namefield.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");

}