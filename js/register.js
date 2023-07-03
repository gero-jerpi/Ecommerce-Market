import '../style.css'

// Register

const userRegister = document.getElementById("user-register")
const passwordRegister = document.getElementById("password-register")
const emailRegister = document.getElementById("email-register")
const formRegister = document.getElementById("form-register")


async function getApi() {
    formRegister.addEventListener("submit", (e) => {
        e.preventDefault()
        const user = {
            email: emailRegister.value,
            user: userRegister.value,
            password: passwordRegister.value
        }
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
     }
    )
}


getApi()








