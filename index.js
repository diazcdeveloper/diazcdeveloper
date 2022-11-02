const btnDark = document.getElementById("btn_dark");
const body = document.getElementById("body");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");


btnDark.addEventListener("click", darkmode);

function darkmode(){
    body.classList.toggle("darkmode")
    sun.classList.toggle("hide")
    moon.classList.toggle("hide")
}
