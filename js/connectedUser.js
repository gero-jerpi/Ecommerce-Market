export function connectedUser() {
    const name = document.getElementById("user-name")
    const userName = JSON.parse(localStorage.getItem("user-name"))
    if (userName != null) {
        name.innerHTML = `<p style="font-size:1.2rem; margin-left: 0.5rem;">¡Bienvenido ${userName}!</p>`
    }
}