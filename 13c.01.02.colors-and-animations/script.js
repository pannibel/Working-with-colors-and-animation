
import {inView, animate} from "https://cdn.skypack.dev/motion";

let body = document.querySelector("body");
let header = document.querySelector("header");
let highlight = document.querySelector(".highlight");
let product = document.querySelector("#product");
let navbutton = document.querySelector("nav button");
let isDark = false;

navbutton.addEventListener("click", switchMode);

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
    navbutton.textContent = "Light Mode";
    highlight.classList.remove("highlight");
    highlight.classList.add("darkhighlight");

    isDark = true;
}

function lightMode() {
    console.log("light mode");
    header.classList.remove("dark");
    product.classList.remove("dark");
    highlight.classList.remove("darkhighlight");
    highlight.classList.add("highlight");
    navbutton.textContent = "Dark Mode";
    isDark = false;
}


//const element = document.querySelectorAll(".animated");
inView("nav", ({target}) => {
    console.log("Element has entered the viewport");
    
    animate(target.querySelectorAll(".animated"),    
        { opacity: [0, 1]},
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });

  })

inView("header", ({target}) => {
    console.log("Element has entered the viewport");
    
    animate(target.querySelectorAll(".animated"),    
        { opacity: [0, 1]},
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });

  })

inView("section", ({target}) => {
    console.log("Element has entered the viewport");
    
    animate(target.querySelectorAll(".animated"),    
        { opacity: [0, 1]},
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });

  })