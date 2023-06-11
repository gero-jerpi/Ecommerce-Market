import './style.css'

// Register

const userRegister = document.getElementById("user-register")
const passwordRegister = document.getElementById("password-register")
const formRegister = document.getElementById("form-register")

export const storedUsers = []

formRegister.addEventListener("submit", (e) => {
    e.preventDefault()
    let createdUser = {
        user: userRegister.value,
        password: passwordRegister.value
    }
    storedUsers.push(createdUser)
    console.log(storedUsers);
})




