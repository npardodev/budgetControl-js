const MAX_REINTENTOS = 3;

const USUARIO_VALIDO = "Manyulas"
const PASSWORD_VALIDO = "Manyulas"
let reintentos = MAX_REINTENTOS;

let formulario = document.getElementById("login-form");

const guardarEnSession = (clave, valor) => { sessionStorage.setItem(clave, valor) };
const guardarEnLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// Below function Executes on click of login button.
function validateLogin(evt) {

    user = formulario.user.value;
    passwd = formulario.password.value;
    checkBox = formulario.checkGuardar;

    evt.preventDefault();

    if ((user == USUARIO_VALIDO && passwd == PASSWORD_VALIDO )) {

        // Verifico si desea recordar usuario y passwd y almaceno en Session
        if (checkBox.checked == true) {
            console.log("Almacenando en Session");
            guardarEnSession('user', user);
            guardarEnSession('password', passwd);
        }

        console.log("Login exitoso");
        window.location = "./loged.html";
        return true;
    } else {

        reintentos--;

        console.log("Login erróneo. Quedan " + reintentos + " reintentos.");
        alert("Login erróneo. Quedan " + reintentos + " reintentos.");

        // Deshabilitar los campos luego de ingreos erróneos	
        if (reintentos == 0) {
            formulario.user.disabled = true;
            formulario.password.disabled = true;
            formulario.btnsubmit.disabled = true;
        }

    }

}


/* Evento Login  */
var btnSubmit = document.getElementById('btnsubmit');
btnSubmit.addEventListener('click', validateLogin);


$(document).ready(function() {

    // Verifico si esta almacenado en Local
    var userSaved = sessionStorage.getItem('user');
    var passwdSaved = sessionStorage.getItem('password');

    if ((userSaved == USUARIO_VALIDO && passwdSaved == PASSWORD_VALIDO )) {

        console.log("Login exitoso");
        window.location = "./index.html"; // Redireccion hacia otra página
    }

});