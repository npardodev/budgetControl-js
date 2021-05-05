// ------------------------------------------//
// --------------- UTILIDADES ---------------//
// ------------------------------------------//

/* Funciones matemáticas */
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const dividir = (a, b) => a / b;
const multiplicar = (a, b) => a * b;

/* Funciones de Storage */
const guardarEnLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
const guardarEnSession = (clave, valor) => { sessionStorage.setItem(clave, valor) };

const obtenerEnLocal = (valor) => { localStorage.getItem(clave) };
const obtenerEnSession = (clave) => { sessionStorage.getItem(clave) };


function leerStorageLocal() {

    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        console.log("Clave:" + clave);
        console.log("Valor:" + JSON.parse(localStorage.getItem(clave)));
    }
}

function leerStorageSession() {

    for (let i = 0; i < sessionlStorage.lenth; i++) {
        let clave = sessionlStorage.key(i);
        console.log("Clave:" + clave);
        console.log("Valor:" + sessionlStorage.getItem(clave));
    }

}

function hayEspacio(getStorage) {
    try {
        const key = "__clave_de_prueba__";
        getStorage().setItem(key, key);
        getStorage().removeItem(key);
        // hay espacio
        return true;
    } catch (e) {
        // No hay espacio
        return false;
    }
}


/* Manejo del DOM */
const obtenerValor = (a) => document.getElementById(a).value;
const setearValor = (a, b) => document.getElementById(a).value = b;

/* Utilidades para los arreglos */
const ordenarArreglo = (arreglo) => { arreglo.sort() };

function buscarEnArreglo(str, arreglo) {
    for (let j = 0; j < arreglo.length; j++) {
        if (arreglo[j].match(str)) return true;
    }
    return false;
}

function removerEnArreglo(valor, arreglo) {

    let index = arreglo.indexOf(valor);
    if (index > -1) {
        arreglo.splice(index, 1);
    }
    return arreglo;
}

/* Funciones para manejar Json */
function objetoAString(objeto) {

    const objetGasto = objeto;
    const enJSON = JSON.stringify(objetGasto);

    return enJSON;
}

function StringAObjeto(string) {

    const enJSON = string;
    const objet = JSON.parse(enJSON);

    return objet;
}

/* Funciones de Fechas */

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}