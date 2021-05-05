// ------------------------------------------//
// ---------------- OBJETO : ----------------//
// ---------------- INGRESO -----------------//
// ------------------------------------------//

class Ingreso {

    constructor(nombre, id, description, catego, precio, tipoPago) {
        this.Nombre = nombre;
        this.Id = id;
        this.Descripcion = description.toLowerCase();
        this.Categoria = catego;
        this.Precio = parseFloat(precio);
        this.TipoPago = tipoPago;
        this.Fecha = new Date();
    }

    // Getters
    get nombre() {
        return this.Nombre;
    }

    get id() {
        return this.Id;
    }

    get descripcion() {
        return this.Descripcion;
    }

    get categoria() {
        return this.Categoria;
    }

    get precio() {
        return this.Precio;
    }

    get metodoPago() {
        return this.TipoPago;
    }

    get fecha() {
        let date_time = this.Fecha
        let formatted_date = date_time.getDate() + "-" + (date_time.getMonth() + 1) + "-" + date_time.getFullYear()
        return formatted_date;
    }

    // Setters
    set nombre(n) {
        this.Nombre = n;
    }

    set id(value) {
        this.Id = value;
    }

    set descripcion(texto) {
        this.Descripcion = texto;
    }

    set categoria(cat) {
        this.Categoria = cat;
    }

    set metodoPago(metodoPago) {
        this.TipoPago = metodoPago;
    }

    set precio(value) {
        this.Precio = value;
    }
}




// --------------------------------------------//
// ----------- Funciones Ingresos -------------//
// --------------------------------------------//

function crearIngreso(nombre, id, description, catego, precio, tipodePago) {

    nuevo_ingreso = new Ingreso(nombre, id, description, catego, precio, tipodePago);
    return nuevo_ingreso;
}


function leerIngresos() {

    let listaIngresos = JSON.parse(localStorage.getItem('Ingresos'));
    if (!listaIngresos) {
        listaIngresos = [];
    }
    return listaIngresos;
}





function validarIngreso(e) {


    var maxInputCharact = 10;

    let formulario = document.getElementById("ingresos");

    let item = formulario.itemIngreso;
    let descrip = formulario.descripIngreso;
    let valor = formulario.valorIngreso;

    //item
    if (item.value > maxInputCharact) {
        console.log('Máximo de caracteres permitidos');
        return false;
    } //si esta vacio
    else if (item.value == '') {
        console.log('Ingrese un item no vacio');
        return false;
    }

    //valor
    if (valor.value > 999999) {
        console.log('Numero muy grande');
        return false;
    } //si esta vacio
    else if (valor.value == '') {
        console.log('Ingrese un valor válido');
        return false;
    }

    //descrip
    if (descrip.value == '') {
        console.log('Ingrese una breve descripcion');
        return false;
    }

    e.preventDefault();
    return true;
}

function sumarIngreso(event) {

    event.preventDefault();

    if (validarIngreso(event)) {
        procesarIngreso(event);
        actualizarTodo(presupuesto);

        return true;
    } else {
        swal("Error", "Alguno de los datos ingresados es erróneo", "error")
        return false;
    }
}

function procesarIngreso(e, presupuesto) {

    e.preventDefault();

    let item = document.getElementById("itemIngreso").value;
    let descrip = document.getElementById("descripIngreso").value;
    let valor = document.getElementById("valorIngreso").value;

    let option_sel_cat = '#categorias' + " option:selected";
    let categoria = $(option_sel_cat).text();
    let option_sel_fp = '#formasPago' + " option:selected";
    let tipoPago = $(option_sel_fp).text();

    nuevoIngreso = crearIngreso(item, presupuesto.Ingresos.length + 1, descrip, categoria, valor, tipoPago);

    return nuevoIngreso;
}


function borrarUltimosIngresos() {
    $("#listaUltimosIngresos").empty();
    console.log("Se borró la lista de últimos ingresos.");
}


function borrarIngreso(event, presupuesto, lista) {

    var par = $(event.target.parentElement);
    let item_id = $(par.parent()).find('.id').text();

    console.log('Se borrará  ' + item_id + ' del presupuesto.');
    ingresoAborrar = presupuesto.Ingresos.find(x => x.Id === item_id);

    //Elimino del presupuesto
    if (ingresoAborrar != null && ingresoAborrar != undefined) {
        presupuesto.removerIngreso(ingresoAborrar);
        console.log('Se borró el Ingreso nro: ' + item_id + ' del presupuesto.');
    } else
        console.log('No se pudo borrar el Ingreso nro: ' + item_id + ' del presupuesto.');

    //Elimino de la lista
    lista.remove('id', item_id); // return 1

}