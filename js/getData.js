// Index
const listProducts = document.getElementById("list-products")
const nameCategory = document.getElementById("category")

export async function getData() {
    const api = await fetch('./products.json')
    const response = await api.json()

    console.log(response);

    // Offer
    const filterOffer = response.filter((prod) => prod.offer === "offer")
    renderProducts(filterOffer)

    // Almacen
    const btnAlmacen = document.getElementById("almacen")
    btnAlmacen.addEventListener("click", (e) => {
        nameCategory.innerText = "ALMACEN"
        const filterAlmacen = response.filter((prod) => prod.category === "almacen")
        listProducts.innerHTML = ""
        renderProducts(filterAlmacen)
    })

    // Limpieza
    const btnLimpieza = document.getElementById("limpieza")
    btnLimpieza.addEventListener("click", () => {
        nameCategory.innerText = "LIMPIEZA"
        const filterLimpieza = response.filter((prod) => prod.category === "limpieza")
        listProducts.innerHTML = ""
        renderProducts(filterLimpieza)
    })

    // Congelados
    const btnCongelados = document.getElementById("congelados")
    btnCongelados.addEventListener("click", () => {
        nameCategory.innerText = "CONGELADOS"
        const filterCongelados = response.filter((prod) => prod.category === "congelados")
        listProducts.innerHTML = ""
        renderProducts(filterCongelados)
    })

    // Verduleria
    const btnFiambreria = document.getElementById("fiambreria")
    btnFiambreria.addEventListener("click", () => {
        nameCategory.innerText = "FIAMBRERIA"
        const filterFiambreria = response.filter((prod) => prod.category === "fiambreria")
        listProducts.innerHTML = ""
        renderProducts(filterFiambreria)
    })

    // Kiosko
    const btnKiosko = document.getElementById("kiosko")
    btnKiosko.addEventListener("click", () => {
        nameCategory.innerText = "KIOSKO"
        const filterKiosko = response.filter((prod) => prod.category === "kiosko")
        listProducts.innerHTML = ""
        renderProducts(filterKiosko)
    })
}

function renderProducts(products) {
    products.forEach((e) => {
        const li = document.createElement("li")
        li.style = "border:0.1rem solid grey; border-radius:1rem; color:black; width:10.5rem; height:18rem; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:0.3rem; box-sizing:content-box; text-align:center;"
        li.innerHTML =
            `
        <img src="${e.img}" style="width:120px;height:120px;">
        <p style="font-weight:600;">$${e.price}</p>
        <p style="color:grey;">${e.amount}</p>
        <p>${e.name}</p>
        <p>${e.brand}</p>
        <button style="width:2rem; height: 1.5rem;"> + </button>
        `
        listProducts.appendChild(li)
    })
}
