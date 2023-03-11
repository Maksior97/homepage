{
    const welcome = () => {
        console.log("Welcome to my first page!");
    }

    welcome();

    const button = document.querySelector(".js--button");

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".body");
        const choice = document.querySelector(".js-choice");

        body.classList.toggle("dark");
        choice.innerText = body.classList.contains("dark") ? "Jasny" : "Ciemny";
    }

    button.addEventListener("click", onChangeBackgroundClick);

}