import './style.css'
import { showNav } from './nav.js'

// Función para mostrar el nav
showNav()

// Login

let storedUsers = [{
    user: "admin",
    password: "123"
}]

function verifyLocalStorage() {
    const localStorageUsers = JSON.parse(localStorage.getItem("users"))
    if (localStorageUsers != null) {
        storedUsers = localStorageUsers
        console.log("Usuarios almacenados localmente", storedUsers)
    }
}

verifyLocalStorage()

const userLogin = document.getElementById("user-login")
const passwordLogin = document.getElementById("password-login")
const formLogin = document.getElementById("form-login")

formLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    const verifyUser = storedUsers.find((user) => user.user === userLogin.value && user.password === passwordLogin.value)
    console.log(verifyUser);
    if (verifyUser === storedUsers[0]) {
        alert("admin logeado")
        document.location.href = "admin.html"

    } else if (verifyUser != storedUsers[0] && verifyUser != undefined) {
        alert("usuario logeado")
        let nameUser = userLogin.value
        localStorage.setItem("user-name", JSON.stringify(nameUser))
        document.location.href = "index.html"
    } else {
        alert("datos incorrectos")
    }
})

