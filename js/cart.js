export function cart() {
    const cartIcon = document.getElementById("cart-icon")
    const cart = document.getElementById("cart")
    const cartList = document.getElementById("cart-list")

    const products = []
    

    // Mostrar
    cartIcon.addEventListener("click", () => {
        cart.classList.toggle("show-cart")
    })


}
