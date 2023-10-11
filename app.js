let validationEmail = function () {
    let email = document.querySelector("#email");
    let emailRegex = /^[\w!@#$%^&*\-*]+@\w+\.(\w{2,})$/ig;
    let testEmail = emailRegex.test(email.value);
    let emailEmptyField = email.closest(".input").querySelector(".emptyField");
    if (testEmail) {
        emailEmptyField.classList.remove("emptyField-active");
        return testEmail;
    } else {
        emailEmptyField.innerHTML = "Email is not valid";
        emailEmptyField.classList.add("emptyField-active");
    }
}

let validationPassword = function () {
    let password = document.querySelector("#password");
    let passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,}$/ig;
    let testPassword = passwordRegex.test(password.value);
    let passwordEmptyField = password.closest(".input").querySelector(".emptyField");
    if (testPassword) {
        passwordEmptyField.classList.remove("emptyField-active");
        return testPassword;
    } else {
        passwordEmptyField.innerHTML = "Password is not valid";
        passwordEmptyField.classList.add("emptyField-active");
    }
}


const signIn = document.querySelector("#signup .sign-in")

signIn.addEventListener("click", (e) => {
    let allValid = document.querySelector("#signup form .all-valid")
    e.preventDefault();
    validationEmail()
    validationPassword();
    if (validationEmail() == true && validationPassword() == true) {
        allValid.innerHTML = "All fields are valid";
        allValid.classList.add("all-valid-active");
        let email = document.querySelector("#email");
        addUserEmailToLocalStorage(email.value)
        window.open("./profile.html");

    } else {
        allValid.classList.remove("all-valid-active")
    }
})

let addUserEmailToLocalStorage = (email) => {
    return window.localStorage.setItem("email", JSON.stringify(email));
}

