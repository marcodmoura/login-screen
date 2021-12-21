const mousePointer = document.querySelector(".button").style.cursor = "pointer";
const usernameInput = document.querySelector("#username")
const passwordInput = document.querySelector("#password")

function clearFields() {
    // Error Menssage
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;

    if (usernameValue === '' || passwordValue === '') {
        const errorMessage = document.querySelector("#error").innerHTML = '<p style="background-color: red;">Please fill out the fields!</p>'

        setTimeout(function() {
            const errorMessage = document.querySelector("#error");
            errorMessage.parentNode.removeChild(errorMessage);
        }, 2000);
        return;

    }
    // Clear Fields
    const usernameClean = document.querySelector("#username").value = "";
    const passwordClean = document.querySelector("#password").value = "";

}
