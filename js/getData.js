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
        <p style="font-weight:600; color:red;">$${e.price}</p>
        <p style="color:grey;">${e.amount}</p>
        <p>${e.name}</p>
        <p>${e.brand}</p>
        </div>
       <svg width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 12h6" />
        <path d="M12 9v6" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
      </svg>
        `
        listProducts.appendChild(li)
    })
}

function renderProducts(products) {
    products.forEach((e) => {
        const li = document.createElement("li")
        li.innerHTML =
            `
        <img src="${e.img}" style="width:120px;height:120px;">
        <div class="div-datos">
        <p style="font-weight:600;">$${e.price}</p>
        <p style="color:grey;">${e.amount}</p>
        <p>${e.name}</p>
        <p>${e.brand}</p>
        </div>
        <svg width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 12h6" />
        <path d="M12 9v6" />
        <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
      </svg>
        `
 
        listProducts.appendChild(li)
    })
}
