// Products

const listProducts = document.getElementById("products-admin")

export async function getData() {
    const api = await fetch('../products.json')
    const response = await api.json()
    renderProducts(response)
    console.log(response);
}

getData()

function renderProducts(products) {
    products.forEach((e) => {
        const li = document.createElement("li")
        li.style = "border:0.1rem solid grey; border-radius:1rem; color:black; width:10.5rem; height:19rem; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:0.2rem; box-sizing:content-box; text-align:center;"
        li.innerHTML =
            `
        <img src="${e.img}" style="width:120px;height:120px;">
        <p style="font-weight:600;">$${e.price}</p>
        <p style="color:grey;">${e.amount}</p>
        <p>${e.name}</p>
        <p>${e.brand}</p>
        <button> Eliminar Producto </button>
        <button> Modificar Producto </button>
        
        `
        listProducts.appendChild(li)
    })
}
