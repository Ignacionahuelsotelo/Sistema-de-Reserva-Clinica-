const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

// forms para registrse o loguearse
const registro_form = document.getElementById("form");
const loginPaciente_form = document.getElementById("loginPacienteForm");
const loginMedico_form = document.getElementById("loginMedicoForm");

// Botones para registrarse o loguearse
const registroBtn = document.getElementById("registroBtn");
const loginMedicoBtn = document.getElementById("loginMedicoBtn");
const loginPacienteBtn = document.getElementById("loginPacienteBtn");

let cuentasPacientes = []; // Array donde se guardan las cuentas
let cuentasMedicos = [];

cambiarVisibilidad = (formulario, visible) => {
    formulario.reset(); // reseteamos el formulario
    parrafo.innerHTML = ""; // cuando cambiamos de pag limpiamos errores
    if (visible) {
        formulario.style.visibility = "initial";
    } else {
        formulario.style.visibility = "hidden";
    }
};

crearCuentaPaciente = (name, mail, contrasenia) => {
    //cambiando un poco los nombres para que no se parezcan a los del dom
    cuentasPacientes.push({
        nombre: name,
        mail: mail,
        password: contrasenia,
    });
};

crearCuentaPaciente("Holaaaaaa", "chau@gmail.com", "1234567");

// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], { type: contentType });
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }
const cuentaValida = () => {
    let warnings = "";
    let entrar = false;
    let validacionMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    parrafo.innerHTML = "";
    if (nombre.value.length < 6) {
        warnings += "El nombre no es valido <br>";
        entrar = true;
    }
    if (!validacionMail.test(email.value)) {
        warnings += "El correo electronico no es valido <br>";
        entrar = true;
    }
    if (pass.value.length < 8) {
        warnings += "La contraseña no es valida <br>";
        entrar = true;
    }
    return warnings;
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let warnings = cuentaValida();
    if (warnings.length != 0) {
        parrafo.innerHTML = warnings;
    } else {
        // window.open()
        crearCuentaPaciente(nombre.value, email.value, pass.value);
        cambiarVisibilidad(registro_form, false); // guarda tambien lo resetea
    }
});

loginPacienteBtn.addEventListener("click", (e) => {
    cambiarVisibilidad(loginPaciente_form, true);
    cambiarVisibilidad(registro_form, false);
    cambiarVisibilidad(loginMedico_form, false);
});

loginMedicoBtn.addEventListener("click", (e) => {
    cambiarVisibilidad(loginMedico_form, true);
    cambiarVisibilidad(registro_form, false);
    cambiarVisibilidad(loginPaciente_form, false);
});

registroBtn.addEventListener("click", (e) => {
    cambiarVisibilidad(registro_form, true);
    cambiarVisibilidad(loginMedico_form, false);
    cambiarVisibilidad(loginPaciente_form, false);
});
