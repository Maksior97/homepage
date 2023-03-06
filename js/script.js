console.log("Welcome to my first page!");

let touch = document.querySelector(".touch");
let photo = document.querySelector(".photo");
let remove = document.querySelector(".remove");
let source = document.querySelector(".source");
let button = document.querySelector(".button");
let body = document.querySelector(".body");
let choice = document.querySelector(".choice");

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


