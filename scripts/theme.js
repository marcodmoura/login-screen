const container = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const background_color = document.querySelector("body");
const button = document.querySelector("#submit-button");

function darkMode() {
    background_color.style.background = "linear-gradient(68.15deg, #000000 16.62%, #5e4641 85.61%)";
    container.style.background = "rgba(0,0,0,0.13)";
    username.style.background = "rgba(0,0,0,0.13)";
    password.style.background = "rgba(0,0,0,0.13)";
    
    username.style.border = "solid 1px rgba(0,0,0,0.13)";
    username.style.outline = "rgba(0,0,0,0.123)";

    password.style.border = "solid 1px rgba(0,0,0,0.13)";
    password.style.outline = "rgba(0,0,0,0.123)";

}

function lightMode() {
    background_color.style.background = "linear-gradient(68.15deg, #2F2325 16.62%, #8E5D52 85.61%)";
    container.style.background = "rgba(255,255,255,0.13)";
    username.style.background = "rgba(255,255,255,0.13)";
    password.style.background = "rgba(255,255,255,0.13)";

    username.style.border = "solid 1px rgba(255,255,255,0.13)";
    username.style.outline = "rgba(255,255,255,255.123)";

    password.style.border = "solid 1px rgba(255,255,255,0.13)";
    password.style.outline = "rgba(255,255,255,255.123)";

}
