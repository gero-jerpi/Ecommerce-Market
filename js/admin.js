// Products

const listProducts = document.getElementById("products-admin")

async function getData() {
    const api = await fetch('../products.json')
    const response = await api.json()
    renderProducts(response)
    console.log(response);
}

getData()

let addProductToCart = {
    name: "",
    price: ""
}
const productsToCart = []

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


