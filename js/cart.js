const cartIcon = document.getElementById("cart-icon")
const cartList = document.getElementById("cart-list")
const volverCart = document.getElementById("volver-cart")
const precioTotal = document.getElementById("precio-total")
const btnComprar = document.getElementById("btn-comprar")

volverCart.addEventListener("click", () => {
    cart.classList.remove("show-cart")
})

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show-cart")
})

let cartProducts = []
let total = []

function addToCart(name, brand, price) {
    const producto = {
        quantity: 1,
        name: name,
        brand: brand,
        price: price
    }

    const productExist = cartProducts.find((p) => p.name === name);

    if (productExist) {
        productExist.quantity++;
        swal("¡Producto actualizado! 😎", {
            icon: "success",
            button: false,
            timer: 1000,
        })

        total.push(Number(productExist.price))
        actualizarTotal()

    } else {
        cartProducts.push(producto)
        swal("¡Producto agregado al carrito! 😎", {
            icon: "success",
            button: false,
            timer: 1000,
        })

        total.push(Number(producto.price))
        actualizarTotal()

    }

    renderizarProducts()
}

function renderizarProducts() {
    cartList.innerHTML = ""
    cartProducts.forEach((e) => {

        const precio = e.quantity * e.price

        const li = document.createElement("li")
        li.innerHTML =
            `
        <span>${e.quantity}</span>
        <span class="name-cart">${e.name}</span>
        <span class="brand-cart">${e.brand}</span>
        <span>$${precio}</span>
       <svg style="cursor:pointer;" onclick="eliminarProducto('${e.name}')" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 7l16 0" />
        <path d="M10 11l0 6" />
        <path d="M14 11l0 6" />
        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
      </svg>
        `
        cartList.appendChild(li)
    })
}


function eliminarProducto(name) {
    let eliminar = cartProducts.filter((product) => product.name != name)
    cartProducts = eliminar
    swal("¡Producto eliminado! 😎", {
        icon: "success",
        button: false,
        timer: 1000,
    })

    total = cartProducts.map((product) => Number(product.price));
    actualizarTotal();

    renderizarProducts()
}

function actualizarTotal() {
    let totalPrice = total.reduce((a, v) => a + v, 0);
    precioTotal.innerText = totalPrice;
}

btnComprar.addEventListener("click", () => {
    cartProducts = []
    total = []
    actualizarTotal();
    renderizarProducts()
})