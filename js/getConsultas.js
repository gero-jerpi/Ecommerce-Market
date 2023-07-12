const listaConsultas = document.getElementById("lista-consultas")

async function getConsultas() {
    const api = await fetch('http://localhost:3000/consultas')
    const response = await api.json()

    response.forEach((e) => {
        const li = document.createElement("li")
        li.innerHTML =
            `
        <p>Número de consulta: ${e.id}</p>
        <p>Nombre: ${e.nombre}</p>
        <p>Email: ${e.email}</p>
        <p>Consulta: ${e.consulta}</p>
        <button onclick="eliminarConsulta('${e.id}')"> X </button>
        `
        listaConsultas.appendChild(li)
    })
}

getConsultas()

async function eliminarConsulta(id) {
    const consultaId = {
        id: id
    }

    try {
        const response = await fetch('http://localhost:3000/eliminarconsulta', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consultaId)
        })
        if (response.ok) {
            swal({
                title: "¿Desea eliminar esta consulta?",
                text: "",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Consulta eliminada!", {
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

