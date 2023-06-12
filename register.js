import './style.css'

// Register

const userRegister = document.getElementById("user-register")
const passwordRegister = document.getElementById("password-register")
const formRegister = document.getElementById("form-register")

export let storedUsers = [{
    user: "admin",
    password: "123"
}]

formRegister.addEventListener("submit", (e) => {
    e.preventDefault()
    const userSearch = storedUsers.find((user) => user.user === userRegister.value)
    if (userSearch === undefined) {
        let createdUser = {
            user: userRegister.value,
            password: passwordRegister.value
        }
        storedUsers.push(createdUser)

        localStorage.setItem("users", JSON.stringify(storedUsers))

        console.log(storedUsers);

        alert("Usuario creado")
        // Redirección: document.location.href = "login.html"
    } else {
        alert("Usuario ya existente")
    }

})

function verifyLocalStorage(){
    const localStorageUsers = JSON.parse(localStorage.getItem("users"))
    storedUsers = localStorageUsers
    console.log("Usuarios almacenados localmente", storedUsers);
}
verifyLocalStorage()







