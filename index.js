var button = document.getElementById("toggle-btn");
var navbar = document.getElementById("navbar-list-content");

button.addEventListener("click",function(){
    navbar.classList.toggle("opened")
})

button.addEventListener("touchstart", function(){
    navbar.classList.toggle("opened")
})