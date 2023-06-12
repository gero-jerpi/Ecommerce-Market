// Index
const listProducts = document.getElementById("list-products")


export async function fetchData() {
    const api = await fetch('./products.json')
    const response = await api.json()


    renderProducts(response)
    console.log(response);

    // Prueba filtro
    const pruebaFilter = document.getElementById("filter")
    const filter = await response.filter((prod) => prod.offer === "offer")
    pruebaFilter.addEventListener("click", () => {
        listProducts.innerHTML = ""
        renderProducts(filter)
    })

}

function renderProducts(products) {
    products.forEach((e) => {
        const li = document.createElement("li")
        li.style = "width:12rem; height:22rem; display:flex; flex-direction:column; gap:0.2rem;"
        li.innerHTML =
            `
        <img src="${e.img}">
        <p>$${e.price}</p>
        <p>${e.amount}</p>
        <p>${e.name}</p>
        <p>${e.brand}</p>
        <button> + </button>
        `
        listProducts.appendChild(li)
    })
}

