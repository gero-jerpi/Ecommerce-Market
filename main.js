import './style.css'
import { fetchData } from './renderProducts.js'


const name = document.getElementById("user-name")

function verifyLocalStorage() {
    const userName = JSON.parse(localStorage.getItem("user-name"))
    if (userName != null) {
        name.innerHTML = `<p style="color:green;font-size:1.5rem;padding:1rem;">¡Bienvenido ${userName}!</p>`
    }
}
verifyLocalStorage()

fetchData()
