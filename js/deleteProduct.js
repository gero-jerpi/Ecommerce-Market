async function eliminar(id) {
    
    const idProduct = {
        id: id
    }

    try {
        const response = await fetch('http://localhost:3000/deleteproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(idProduct)
        })

        if (response.ok) {
            swal({
                title: "¿Desea eliminar este producto?",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("¡Producto eliminado!", {
                            icon: "success",
                            button: false,
                            timer: 1500,
                        })
                        setTimeout(() => {
                            document.location.href = "/pages/admin.html"
                        }, 1500)

                    }
                });
        }

    } catch (error) {
        console.log(error);
    }

}
