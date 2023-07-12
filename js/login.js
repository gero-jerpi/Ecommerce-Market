import '../style.css'
import swal from 'sweetalert';

async function getUsers() {

    const userLogin = document.getElementById("user-login")
    const passwordLogin = document.getElementById("password-login")
    const formLogin = document.getElementById("form-login")

    formLogin.addEventListener("submit", async (e) => {
        e.preventDefault()
        const user = {
            user: userLogin.value,
            password: passwordLogin.value,
        }

        if (user.user === "admin" && user.password === "123") {
            swal(`¡Bienvenido ${user.user}! 😎`, {
                buttons: false,
                timer: 1000
            });
            setTimeout(() => {
                document.location.href = "../pages/admin.html"
            }, 1000);

            return
        }

        try {

            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            if (response.ok) {
                swal(`¡Bienvenido ${user.user}! 😎`, {
                    buttons: false,
                    timer: 1500
                });
                setTimeout(() => {
                    document.location.href = "../index.html"
                }, 1500);

                localStorage.setItem("user-name", JSON.stringify(user.user))

            } else {
                swal("¡Datos incorrectos! 😐", {
                    buttons: false,
                    timer: 1000
                });
                formLogin.reset()
            }

        } catch (error) {
            console.log("Error en la solicitud", error);
        }
    })
}

getUsers()


