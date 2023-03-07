console.log("Welcome to my first page!");

let touch = document.querySelector(".section__touch--js");
let photo = document.querySelector(".section__photo--js");
let remove = document.querySelector(".section__remove");
let source = document.querySelector(".section__source");
let button = document.querySelector(".js--button");
let body = document.querySelector(".body");
let choice = document.querySelector(".js-choice");

touch.addEventListener("click", () => {
    photo.remove();
});

remove.addEventListener("click", () => {
    source.remove();
});

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    choice.innerText = body.classList.contains("dark") ? "Jasny" : "Ciemny";
});


