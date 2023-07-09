import '../style.css'
import swal from 'sweetalert';

const userRegister = document.getElementById("user-register")
const passwordRegister = document.getElementById("password-register")
const emailRegister = document.getElementById("email-register")
const formRegister = document.getElementById("form-register")


async function getApi() {
    formRegister.addEventListener("submit", async (e) => {
        e.preventDefault()
        const user = {
            email: emailRegister.value,
            user: userRegister.value,
            password: passwordRegister.value
        }

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            if (!response.ok) {
                alert("Nombre de usuario existente...🙁")
                userRegister.value = ""
            } else {
                alert("¡Cuenta creada!")
                document.location.href = "login.html"
            }

        } catch (error) {
            console.log(error);
        }

    }
    )
}


getApi()








