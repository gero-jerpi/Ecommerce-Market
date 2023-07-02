export function showNav() {
    // Show nav
    const btnMenu = document.getElementById("menu")
    const nav = document.getElementById("nav")
    const header = document.getElementById("header")

    btnMenu.addEventListener("click", () => {
        nav.classList.toggle("show-nav")
        header.classList.toggle("show-border")
    })

    // Show options products
    const liShowOptions = document.getElementById("show-options")
    const menuOptions = document.getElementById("menu-options")

    liShowOptions.addEventListener("click", () => {
        menuOptions.classList.toggle("show-menu-options")
    })
}
