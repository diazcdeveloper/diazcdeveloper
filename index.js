const menu = document.querySelector(".menu");
const aside = document.getElementById("aside");
const option = document.getElementById("option");
const options = document.querySelector(".options");
const colors = document.querySelector(".colors");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const body = document.getElementById("body");
const imgContainer = document.querySelector(".img")
const content = document.querySelector(".content");
const btnContact = document.querySelector(".btn")
const form = document.querySelector(".form");
const backBtn = document.querySelector(".back");


menu.addEventListener("click", asideMenu);

function asideMenu () {
    aside.classList.toggle("open");
    menu.classList.toggle("close");
};



option.addEventListener("click", showColor);

violet.addEventListener("click", changeColorViolet);
orange.addEventListener("click", changeColorOrange);
pink.addEventListener("click", changeColorPink);

function showColor (e) {
    options.classList.toggle("show");
    if(options.classList.contains("show")){
        colors.classList.remove("hide")
    }else{
        colors.classList.add("hide")
    }

    e.stopPropagation();
};

function changeColorViolet(e){
    body.classList.remove("orange");
    body.classList.remove("pink");
    e.stopPropagation();
};

function changeColorOrange(e){
    body.classList.add("orange")
    body.classList.remove("violet");
    body.classList.remove("pink");
    e.stopPropagation();
};

function changeColorPink(e){
    body.classList.add("pink");
    body.classList.remove("violet");
    body.classList.remove("orange");
    e.stopPropagation();
};



btnContact.addEventListener("click", showForm);

function showForm(){
    imgContainer.classList.add("form-on");
    content.classList.add("form-on");
    form.classList.remove("hide");
}


backBtn.addEventListener("click", backToContent);

function backToContent(){
    imgContainer.classList.remove("form-on");
    content.classList.remove("form-on");
    form.classList.add("hide");
}