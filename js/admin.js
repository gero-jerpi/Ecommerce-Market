import swal from 'sweetalert';

const listProducts = document.getElementById("products-admin")

async function getData() {
    const api = await fetch('http://localhost:3000/products')
    const response = await api.json()
    renderProducts(response)
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
            <img src="${e.img}" style="width:60px;height:60px;">
            <div>
            <p class="price" style="font-weight:600;">$${e.price}</p>
            <p style="color:grey;">${e.amount}</p>
            <p class="name">${e.name}</p>
            <span>${e.brand}</span>
            </div>
           <button onclick="eliminar('${e.id}')">Eliminar</button>

        `
 
        listProducts.appendChild(li)
    })
}


