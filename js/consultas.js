import swal from 'sweetalert';

const formulario = document.getElementById("formulario")
const inputNombre = document.getElementById("input-nombre")
const inputEmail = document.getElementById("input-email")
const inputConsulta = document.getElementById("input-consulta")

formulario.addEventListener("submit", async (e) => {
    e.preventDefault()

    emailjs.init('SKPttk2Is2gz1GWu-');

    const consulta = {
        nombre: inputNombre.value,
        email: inputEmail.value,
        consulta: inputConsulta.value
    }

    const templateParams = {
        nombre: `${inputNombre.value}`,
        email: `${inputEmail.value}`,
        consulta: `${inputConsulta.value}`
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
            emailjs.send('service_wi6s12t', 'template_binr5sy', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
            swal("¡Consulta enviada! 😀", {
                buttons: false,
                timer: 1500
            });
            setTimeout(() => {
                document.location.href = "../index.html"
            }, 1500)
        }


    } catch (error) {
        console.log(error);
    }

})
