
let body = document.querySelector("body");
let header = document.querySelector("header");
let product = document.querySelector("#product");
let button = document.querySelector("nav button");
let isDark = false;

button.addEventListener("click", switchMode);

function switchMode() {
    console.log("switch mode");
    if (isDark) {
        lightMode();
    } else if (!isDark) {
        darkMode();
    }
}

function darkMode() {
    console.log("dark mode");
    header.classList.add("dark");
    product.classList.add("dark");
    isDark = true;
}

function lightMode() {
    console.log("light mode");
    header.classList.remove("dark");
    product.classList.remove("dark");
    isDark = false;
}