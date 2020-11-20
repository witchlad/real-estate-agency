let button = document.getElementById("toggle-btn");
let navbar = document.getElementById("navbar-list-content");

button.addEventListener("click",function(){
    navbar.classList.toggle("opened")
})
