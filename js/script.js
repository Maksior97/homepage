{
    const welcome = () => {
        console.log("Welcome to my first page!");
    }

    const init = () => {
        const button = document.querySelector(".js--button");
        button.addEventListener("click", onChangeBackgroundClick);

        welcome();
    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const choice = document.querySelector(".js-choice");

        body.classList.toggle("dark");
        choice.innerText = body.classList.contains("dark") ? "Jasny" : "Ciemny";
    }

    init();
}