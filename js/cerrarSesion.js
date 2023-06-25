export function cerrarSesion(){
    const cerrarSesion = document.getElementById("sign-off")
    cerrarSesion.addEventListener("click", ()=>{
        localStorage.clear()
        document.location.href = "index.html"
    })
}