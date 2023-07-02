import '../style.css'

// Register

const userRegister = document.getElementById("user-register")
const passwordRegister = document.getElementById("password-register")
const formRegister = document.getElementById("form-register")

async function getApi() {

    const api = await fetch('http://localhost:3000/users')
    const result = await api.json()
    let storedUsers = result

    formRegister.addEventListener("submit", (e) => {
        e.preventDefault()
        const user = {
            user: userRegister.value,
            password: passwordRegister.value
        }
        const userSearch = storedUsers.find((user) => user.user === userRegister.value)
        if (userSearch === undefined) {
            alert("Usuario creado")

            fetch('http://localhost:3000/add-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
        } else {
            alert("Usuario ya existente")
        }
    })
}

getApi()








