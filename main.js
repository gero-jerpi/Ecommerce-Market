import './style.css'
import { fetchData } from './renderProducts.js'
import { showNav } from './nav.js'

// Mensaje de bienvenida con nombre del usuario
const name = document.getElementById("user-name")

function verifyLocalStorage() {
    const userName = JSON.parse(localStorage.getItem("user-name"))
    if (userName != null) {
        name.innerHTML = `<p style="font-size:1.2rem; margin-left: 0.5rem;">¡Bienvenido ${userName}!</p>`
    }
}
verifyLocalStorage()

// Función para mostrar el nav
showNav()

// Función para mostrar productos
fetchData()

