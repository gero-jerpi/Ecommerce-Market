// Index
const listProducts = document.getElementById("list-products")


export async function fetchData() {
    const api = await fetch('./products.json')
    const response = await api.json()

    console.log(response);

    // Offer
    const filterOffer = response.filter((prod) => prod.offer === "offer")
    renderProducts(filterOffer)

    // Almacen
    const btnAlmacen = document.getElementById("almacen")
    btnAlmacen.addEventListener("click", (e) => {
        const filterAlmacen = response.filter((prod) => prod.category === "almacen")
        listProducts.innerHTML = ""
        renderProducts(filterAlmacen)
    })

    // Limpieza
    const btnLimpieza = document.getElementById("limpieza")
    btnLimpieza.addEventListener("click", () => {
        const filterLimpieza = response.filter((prod) => prod.category === "limpieza")
        listProducts.innerHTML = ""
        renderProducts(filterLimpieza)
    })

    // Congelados
    const btnCongelados = document.getElementById("congelados")
    btnCongelados.addEventListener("click", () => {
        const filterCongelados = response.filter((prod) => prod.category === "congelados")
        listProducts.innerHTML = ""
        renderProducts(filterCongelados)
    })

    // Verduleria
    const btnFiambreria = document.getElementById("fiambreria")
    btnFiambreria.addEventListener("click", () => {
        const filterFiambreria = response.filter((prod) => prod.category === "fiambreria")
        listProducts.innerHTML = ""
        renderProducts(filterFiambreria)
    })

    // Kiosko
    const btnKiosko = document.getElementById("kiosko")
    btnKiosko.addEventListener("click", () => {
        const filterKiosko = response.filter((prod) => prod.category === "kiosko")
        listProducts.innerHTML = ""
        renderProducts(filterKiosko)
    })
}

function renderProducts(products) {
    products.forEach((e) => {
        const li = document.createElement("li")
        li.style = "background-color:grey; color:white; width:11.5rem; height:19.8rem; display:flex; flex-direction:column; align-items:center; gap:0.2rem;"
        li.innerHTML =
            `
        <img src="${e.img}" style="width:170px;height:170px;margin-top:0.3rem">
        <p>$${e.price}</p>
        <p>${e.amount}</p>
        <p>${e.name}</p>
        <p>${e.brand}</p>
        <button style="width:2rem; height: 1.5rem;"> + </button>
        `
        listProducts.appendChild(li)
    })
}

