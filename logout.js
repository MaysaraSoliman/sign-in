let email = document.querySelector("#logout .email");
let logout = document.querySelector("#logout .logout");
console.log(email);

let getEmailFromLocalStorage = () => {
    email.textContent = JSON.parse(localStorage.getItem("email"));
}
getEmailFromLocalStorage()

logout.addEventListener("click", () => {
    localStorage.removeItem("email");
    window.open("./index.html");
})
