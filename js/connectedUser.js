import swal from 'sweetalert';

export function connectedUser() {

  // Bienvenida
  const name = document.getElementById("user-name")
  const userName = JSON.parse(localStorage.getItem("user-name"))
  if (userName != null) {
    name.innerHTML = `<p style="color:green;">¡Bienvenido ${userName}! 😀</p> <p id="sign-off">Cerrar sesión</p>`

    // Cerrar sesion
    const signOff = document.getElementById("sign-off")
    signOff.style = "cursor:pointer;font-weight:600;"
    signOff.addEventListener("click", () => {
      swal({
        title: "¿Desea cerrar sesión?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            swal("¡Cuenta desconectada!", {
              icon: "success",
            });
            localStorage.clear()
            name.innerHTML = `<a href="pages/login.html">Iniciar sesión</a>`
          }
        });
    })
  }


}

