let email = document.querySelector("#logout .email");
let logout = document.querySelector("#logout .logout");
console.log(email);

let getEmailFromLocalStorage = () => {
    email.textContent = JSON.parse(localStorage.getItem("email"));
}
getEmailFromLocalStorage()

logout.addEventListener("click", () => {
    localStorage.removeItem("email");
    window.location.href = "http://127.0.0.1:5500/index.html?email=maysarasoliman54%40gmail.com&password=22";
})
