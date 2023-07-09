
const formulario = document.getElementById("formulario")

const inputOffer = document.getElementById("input-offer")
const inputCategory = document.getElementById("input-category")
const inputImg = document.getElementById("input-img")
const inputPrice = document.getElementById("input-price")
const inputAmount = document.getElementById("input-amount")
const inputName = document.getElementById("input-name")
const inputBrand = document.getElementById("input-brand")

formulario.addEventListener("submit", async (e) => {
    e.preventDefault()
    const product = {
        offer: inputOffer.value,
        category: inputCategory.value,
        img: inputImg.value,
        price: inputPrice.value,
        amount: inputAmount.value,
        name: inputName.value,
        brand: inputBrand.value
    }


    try {
        const response = await fetch('http://localhost:3000/addproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        if (response.ok) {
            swal({
                title: "¿Desea agregar este producto?",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                  swal("¡Producto agregado! 😎", {
                    icon: "success",
                    button: false,
                    timer: 1500,
                  })
                  setTimeout(() => {
                    document.location.href = "http://127.0.0.1:5173/pages/admin.html"
                  }, 1500);
                 
                }
              });
        }
        
    } catch (error) {
        console.log(error);
    }
})