const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let validacionMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    parrafo.innerHTML = ""
    if( nombre.value.length < 6){
        warnings += "El nombre no es valido <br>"
        entrar = true
    }
    if (!validacionMail.test(email.value)){
        warnings += "El correo electronico no es valido <br>"
        entrar = true
    }
    if (pass.value.length < 8 ){
        warnings += "La contraseña no es valida <br>"
        entrar = true 
    }

    if ( entrar = true ){
        parrafo.innerHTML = warnings
    }
    else{
      // window.open()
    }
})