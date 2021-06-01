let cuentasPacientes = []; // Array donde se guardan las cuentas
let cuentasMedicos = [];

function carg(elemento, id) {
    var elem = document.getElementById(id);

    d = elemento.value;
    console.log(d);
    if (d == "") {
        elem.disabled = true;
    } else {
        elem.disabled = false;
    }
}

crearCuentaPaciente = () => {
    //cambiando un poco los nombres para que no se parezcan a los del dom
    cuentasPacientes.push({
        nombre: nombre.value,
        apellido: apellido.value,
        usuario: usuario.value.toLowerCase(),
        dni: dni.value,
        fechaNac: fechaNacimiento.value,
        mail: email.value,
        prestador: prestador.value,
        tipoCobertura: tipoCobertura,
        medioDePago: medioDePago,
        nroCuenta: nroCuenta.value,
        password: pass.value,
    });
};

crearCuentaPaciente = (user, mail, password) => {
    //cambiando un poco los nombres para que no se parezcan a los del dom
    cuentasPacientes.push({
        usuario: user.toLowerCase(),
        mail: mail,
        password: password,
    });
};

crearCuentaMedico = (legajo, password) => {
    //cambiando un poco los nombres para que no se parezcan a los del dom
    cuentasMedicos.push({
        legajo: legajo,
        password: password,
    });
};

cambiarVisibilidad = (formulario, visible) => {
    formulario.reset(); // reseteamos el formulario
    parrafo.innerHTML = ""; // cuando cambiamos de pag limpiamos errores
    if (visible) {
        formulario.style.visibility = "initial";
    } else {
        formulario.style.visibility = "hidden";
    }
};

const existeUsuario = (user) => {
    existe = false;
    for (cuenta in cuentasPacientes) {
        if (cuenta.usuario == user.toLowerCase) {
            return true;
        }
    }
    return false;
};

const esLegajoInvalido = (legajo) => {
    existe = false;
    if (legajo.length == 0) {
        existe = true;
    }

    return existe;
};