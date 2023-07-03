export function cart() {

    let cartProducts = []

    // Mostrar el carrito con un click
    const cartIcon = document.getElementById("cart-icon")
    const cart = document.getElementById("cart")

    cartIcon.addEventListener("click", () => {
        cart.classList.toggle("show-cart")
    })

    // Boton agregar al carrito
    const main = document.getElementById("main")

    main.addEventListener("click", (e) => {
        if (e.target.classList.contains("add-cart")) {
            const product = e.target.parentElement
            let infoProduct = {
                quantity: 1,
                name: product.querySelector("h4").textContent,
                brand: product.querySelector("span").textContent,
                price: product.querySelector("p").textContent,
            }

            const productExist = cartProducts.some((products) => products.name === infoProduct.name)
            if (productExist) {
                const exist = cartProducts.map((product) => {
                    if (product.name === infoProduct.name) {
                        product.quantity++;
                        return product
                    } else {
                        return product
                    }
                })
                cartProducts = [...exist]
            } else {
                cartProducts.push(infoProduct)
            }
            renderizarProducts()
        }
    })

    // Mostrar productos agregados
    const cartList = document.getElementById("cart-list")
 

    function renderizarProducts() {
        cartList.innerHTML = ""
        cartProducts.forEach((e) => {

            const quantity = e.quantity
            const price = parseInt(e.price.replace(/\D/g, ''));
            const productPrice = quantity * price

            console.log(totalPrice);

            const li = document.createElement("li")
            li.innerHTML =
                `
        <div>
        <span>${e.quantity}</span><span>${e.name}</span><span>${e.brand}</span><span>${productPrice}</span>
        </div>
        `
            cartList.appendChild(li)
        })
    }
}
