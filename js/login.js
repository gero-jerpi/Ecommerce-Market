import '../style.css'

// Login

async function getUsers() {
    const api = await fetch('http://localhost:3000/users')
    const result = await api.json()
    console.log(result);

    let storedUsers = result

    const userLogin = document.getElementById("user-login")
    const passwordLogin = document.getElementById("password-login")
    const formLogin = document.getElementById("form-login")

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault()
        const verifyUser = storedUsers.find((user) => user.user === userLogin.value && user.password === passwordLogin.value)
        console.log(verifyUser);
        if (verifyUser === storedUsers[0]) {
            alert("admin logeado")
            document.location.href = "admin.html"

        } else if (verifyUser != storedUsers[0] && verifyUser != undefined) {
            alert("usuario logeado")
            let nameUser = userLogin.value
            localStorage.setItem("user-name", JSON.stringify(nameUser))
            document.location.href = "../index.html"
        } else {
            alert("datos incorrectos")
        }
    })
}

getUsers()

