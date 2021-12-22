const container = document.querySelector("#container");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const background = document.querySelector("body");
const button = document.querySelector("#submit-button");

function darkMode() {
    container.style.background = "rgba(0,0,0,0.13)";
    username.style.background = "rgba(0,0,0,0.13)";
    password.style.background = "rgba(0,0,0,0.13)";
    
    username.style.border = "solid 1px rgba(0,0,0,0.13)";
    username.style.outline = "rgba(0,0,0,0.123)";

    password.style.border = "solid 1px rgba(0,0,0,0.13)";
    password.style.outline = "rgba(0,0,0,0.123)";

}

function lightMode() {
    container.style.background = "rgba(255,255,255,0.13)";
    username.style.background = "rgba(255,255,255,0.13)";
    password.style.background = "rgba(255,255,255,0.13)";

    username.style.border = "solid 1px rgba(255,255,255,0.13)";
    username.style.outline = "rgba(255,255,255,255.123)";

    password.style.border = "solid 1px rgba(255,255,255,0.13)";
    password.style.outline = "rgba(255,255,255,255.123)";

}
