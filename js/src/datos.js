// ------------------------------------------//
// ------------- Configuraciones ------------//
// ------------------------------------------//


var categorias = [
    { id: 1, name: "General" },
    { id: 2, name: "Comida" },
    { id: 3, name: "Hogar" },
    { id: 4, name: "Transporte" },
    { id: 5, name: "Estudios" },
    { id: 6, name: "Ropa" },
    { id: 7, name: "Salidas" },
    { id: 8, name: "Hobbies" },
    { id: 9, name: "Deportes" },
    { id: 10, name: "Ahorro" },
    { id: 11, name: "Salud" }
]

var formasPago = [
    { id: 1, name: "Tarjeta" },
    { id: 2, name: "Efectivo" },
    { id: 3, name: "Cheque" },
    { id: 4, name: "Bono" }
]

var tiposBancos = [
    { id: 1, name: "Banco Nacion" },
    { id: 2, name: "Banco provincia" },
    { id: 3, name: "Banco Ciudad", },
    { id: 4, name: "Banco Galicia" },
    { id: 5, name: "Banco Rio" },
    { id: 6, name: "Banco ICBC" },
    { id: 7, name: "Banco Frances" },
    { id: 8, name: "Banco Patagonia" },
    { id: 9, name: "Banco Hipotecario" }
]

var tiposTarjetas = [
    { id: 1, name: "Visa" },
    { id: 2, name: "Mastercard" },
    { id: 3, name: "American Express" }
]

//Area Option
var categoriasSelect = document.getElementById('categorias');
var formasPagoSelect = document.getElementById('formasPago');
var tiposBancosSelect = document.getElementById('tiposBancos');
var tiposTarjetaSelect = document.getElementById('tiposTarjetas');


function agregarEnLista(lista, elementSelect, nombre) {

    //Creo el nuevo objeto
    nuevoItem = { id: categorias.length, name: nombre };
    //Lo agrego en la lista
    lista.push(nuevoItem);
    //Lo agrego en el select
    let opcion = document.createElement('option');
    opcion.value = nuevoItem.id;
    opcion.text = nuevoItem.name;
    elementSelect.add(opcion);
}


function cargarSelect(elemento, array) {

    array.forEach(function(array) {
        let opcion = document.createElement('option')
        opcion.value = array.id
        opcion.text = array.name
        elemento.add(opcion)
    });
}


function borrarEnLista(lista, item) {
    let i = 0;
    for (let j = 0; j < lista.length; j++) {
        if (lista[j].name == item) {
            i = j;
            break;
        }
    }

    if (i !== -1) {
        lista.splice(i, 1);
    } else
        return;
}

function agregarNuevaOpcion(event, lista, selector) {

    event.preventDefault();

    let identif = event.target.parentNode.parentNode.querySelector("input");

    // Lectura
    var str = $(identif).val();

    // Valido
    if (str == null || str == "") {
        return;
    }
    // Agregado
    agregarEnLista(lista, $(selector), str);
}

function removerOpcion(event, lista, selector) {

    event.preventDefault();

    selecc = $(selector);
    option_sel = selector + " option:selected";

    let seleccionValor = selecc.val();
    let seleccionOpcion = $(option_sel).text();


    if (seleccionValor == 0 || seleccionValor == null || seleccionValor == "") {
        return;
    }

    borrarEnLista(lista, seleccionOpcion);
}