import './style.css'
import { storedUsers } from './register.js'

// Login

const userLogin = document.getElementById("user-login")
const passwordLogin = document.getElementById("password-login")
const formLogin = document.getElementById("form-login")

console.log(storedUsers);

formLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    const verifyUser = storedUsers.find((user) => user.user === userLogin.value && user.password === passwordLogin.value)
    console.log(verifyUser);
    if (verifyUser === storedUsers[0]) {
        alert("admin logeado")
        document.location.href = "admin.html"

    } else if (verifyUser != storedUsers[0] && verifyUser != undefined) {
        alert("usuario logeado")
        document.location.href = "index.html"
    } else {
        alert("datos incorrectos")
    }
})


