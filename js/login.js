import '../style.css'

// Login

async function getUsers() {

    const userLogin = document.getElementById("user-login")
    const passwordLogin = document.getElementById("password-login")
    const formLogin = document.getElementById("form-login")

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault()
        const user = {
            user: userLogin.value,
            password: passwordLogin.value,
        }

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        

    })




}

getUsers()


