let hamburger = document.getElementById("nav-hamburger");
let menu = document.querySelector("#main-nav ul")
hamburger.addEventListener("click", (e) => {
  menu.classList.toggle("open");
})