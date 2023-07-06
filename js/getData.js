// Index
const listProducts = document.getElementById("list-products")
const nameCategory = document.getElementById("category")
const nav = document.getElementById("nav")
const header = document.getElementById("header")

export async function getData() {
    const api = await fetch('./products.json')
    const response = await api.json()

    console.log(response);

    // Offer
    const filterOffer = response.filter((prod) => prod.offer === "offer")
    renderOffer(filterOffer)

    const btnOfertas = document.getElementById("ofertas")
    btnOfertas.addEventListener("click", (e) => {
        nameCategory.innerText = "OFERTAS"
        const filterOffer = response.filter((prod) => prod.offer === "offer")
        listProducts.innerHTML = ""
        renderOffer(filterOffer)
        nav.classList.remove("show-nav")
        header.classList.remove("show-border")
    })

    // Almacen
    const btnAlmacen = document.getElementById("almacen")
    btnAlmacen.addEventListener("click", (e) => {
        nameCategory.innerText = "ALMACEN"
        const filterAlmacen = response.filter((prod) => prod.category === "almacen")
        listProducts.innerHTML = ""
        renderProducts(filterAlmacen)
        nav.classList.remove("show-nav")
        header.classList.remove("show-border")
    })

    // Limpieza
    const btnLimpieza = document.getElementById("limpieza")
    btnLimpieza.addEventListener("click", () => {
        nameCategory.innerText = "LIMPIEZA"
        const filterLimpieza = response.filter((prod) => prod.category === "limpieza")
        listProducts.innerHTML = ""
        renderProducts(filterLimpieza)
        nav.classList.remove("show-nav")
        header.classList.remove("show-border")
    })

    // Congelados
    const btnCongelados = document.getElementById("congelados")
    btnCongelados.addEventListener("click", () => {
        nameCategory.innerText = "CONGELADOS"
        const filterCongelados = response.filter((prod) => prod.category === "congelados")
        listProducts.innerHTML = ""
        renderProducts(filterCongelados)
        nav.classList.remove("show-nav")
        header.classList.remove("show-border")
    })

    // Verduleria
    const btnFiambreria = document.getElementById("fiambreria")
    btnFiambreria.addEventListener("click", () => {
        nameCategory.innerText = "FIAMBRERIA"
        const filterFiambreria = response.filter((prod) => prod.category === "fiambreria")
        listProducts.innerHTML = ""
        renderProducts(filterFiambreria)
        nav.classList.remove("show-nav")
        header.classList.remove("show-border")
    })

    // Kiosko
    const btnKiosko = document.getElementById("kiosko")
    btnKiosko.addEventListener("click", () => {
        nameCategory.innerText = "KIOSKO"
        const filterKiosko = response.filter((prod) => prod.category === "kiosko")
        listProducts.innerHTML = ""
        renderProducts(filterKiosko)
        nav.classList.remove("show-nav")
        header.classList.remove("show-border")
    })
}

function renderOffer(products) {
    products.forEach((e) => {
        const li = document.createElement("li")
        li.innerHTML =
            `
        <img src="${e.img}" style="width:110px;height:110px;">
        <div class="div-datos">
        <p class="price" style="font-weight:600; color:red;">$${e.price}</p>
        <p style="color:grey;">${e.amount}</p>
        <h4 class="name">${e.name}</h4>
        <span>${e.brand}</span>
        </div>
       <button onclick="addToCart('${e.name}','${e.brand }','${e.price}')">+</button>
        `
        listProducts.appendChild(li)
    })
}

function renderProducts(products) {
    products.forEach((e) => {
        const li = document.createElement("li")
        li.innerHTML =
            `
            <img src="${e.img}" style="width:110px;height:110px;">
            <div class="div-datos">
            <p class="price" style="font-weight:600;">$${e.price}</p>
            <p style="color:grey;">${e.amount}</p>
            <h4 class="name">${e.name}</h4>
            <span>${e.brand}</span>
            </div>
           <button onclick="addToCart('${e.name}','${e.brand }','${e.price}')" class="add-cart">+</button>
        `

        listProducts.appendChild(li)
    })
}
