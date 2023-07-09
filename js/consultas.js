import swal from 'sweetalert';

const formulario = document.getElementById("formulario")
const inputNombre = document.getElementById("input-nombre")
const inputEmail = document.getElementById("input-email")
const inputConsulta = document.getElementById("input-consulta")

formulario.addEventListener("submit", async (e)=>{
    e.preventDefault()

    const consulta = {
        nombre: inputNombre.value,
        email: inputEmail.value,
        consulta: inputConsulta.value
    }

    try {
        const response = await fetch('http://localhost:3000/subirconsulta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consulta)
        })

        if (response.ok) {
            swal("¡Consulta enviada! 😀",{
                buttons: false,
                timer: 1500
            });
            setTimeout(()=>{
                document.location.href = "../index.html"
            }, 1500)
            formulario.reset()
        }


    } catch (error) {
        console.log(error);
    }

})
