import './style.css'
import { storedUsers } from './register'

// Login

const userLogin = document.getElementById("user-login")
const passwordLogin = document.getElementById("password-login")
const formLogin = document.getElementById("form-login")

formLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    const verifyUser = storedUsers.find((user)=>user.user === userLogin.value && user.password === passwordLogin.value)
    console.log(verifyUser);
    if (verifyUser != undefined) {
        alert("Usuario logeado")
    }else{
        alert("Datos incorrectos")
    }
})


