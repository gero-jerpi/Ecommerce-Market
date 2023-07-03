import '../style.css'

// Login

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
            alert(`Bienvenido, ${user.user}`)
            document.location.href = "../pages/admin.html"
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
                alert(`Bienvenido, ${user.user}`);
                localStorage.setItem("user-name", JSON.stringify(user.user))
                document.location.href = "../index.html"
            }else{
                alert("Datos incorrectos");
                formLogin.reset()
            }



        } catch (error) {
            console.log("Error en la solicitud", error);
        }
    })
}

getUsers()


