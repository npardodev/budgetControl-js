// ------------------------------------------//
// -------------- PRESUPUESTO ---------------//
// ------------------------------------------//

var indicesGastos = {
    indicesPorcentaje: new Set(),
    indicesCantidad: new Set(),
    indicesPrecio: new Set()
};

var indicesIngresos = {
    indicesPorcentaje: new Set(),
    indicesCantidad: new Set(),
    indicesPrecio: new Set()
}

class Presupuesto {

    constructor(nom, presupIn, presupDispo, indiceCrecimi) {
        this.Nombre = nom;
        this.Inicial = presupIn;
        this.Disponible = presupDispo;
        this.Gastado = 0;
        this.Acumulado = 0;
        this.Crecimiento = indiceCrecimi;
        this.Ingresos = [];
        this.Gastos = [];
        this.Estadisticas = { indicesGastos, indicesIngresos };
        this.Fecha = new Date();
    }

    // Getters
    get nombre() {
        return this.Nombre;
    }

    get inicial() {
        return this.Inicial;
    }

    get disponible() {
        return this.Disponible;
    }

    get gastado() {
        return this.Gastado;
    }

    get fecha() {
        let date_time = this.Fecha;
        let formatted_date = date_time.getDate() + "-" + (date_time.getMonth() + 1) + "-" + date_time.getFullYear();
        return formatted_date;
    }

    // Setters
    set nombre(n) {
        this.Nombre = n;
    }

    set inicial(value) {
        this.Inicial = value;
    }

    set disponible(value) {
        this.Disponible = value;
    }

    set gastado(value) {
        this.gastado = value;
    }

    actualizar() {
        this.Disponible = this.Acumulado - this.Gastado;
    }
}

// ------------------------------------------//
// ----------------- VIEW -------------------//
// ------------------------------------------//

// Vista - Modificacion del DOM y eventos
class PresupuestoView {

    // Metodos para mostrar las distintas secciones
    mostrarTablero() {
        $("#app").html(TEMPLATE_TABLERO).hide().delay(0).fadeIn(800);
        uploadTranslateSeccion();
    }

    mostrarPresupuesto() {
        $("#app").html(TEMPLATE_PRESUPUESTO).hide().delay(0).fadeIn(800);
        uploadTranslateSeccion();
    }

    mostrarIngresos() {
        $("#app").html(TEMPLATE_INGRESOS).hide().delay(0).fadeIn(800);
        uploadTranslateSeccion();
    }

    mostrarGastos() {
        $("#app").html(TEMPLATE_GASTOS).hide().delay(0).fadeIn(800);
        uploadTranslateSeccion();
    }

    mostrarEstadisticas() {
        $("#app").html(TEMPLATE_ESTADISTICAS).hide().delay(0).fadeIn(800);
        uploadTranslateSeccion();
    }

    mostrarCotizaciones() {
        $("#app").html(TEMPLATE_COTIZACIONES).hide().delay(0).fadeIn(800);
        uploadTranslateSeccion();
    }

    mostrarReportes() {
        $("#app").html(TEMPLATE_REPORTES).hide().delay(0).fadeIn(800);
        uploadTranslateSeccion();
    }

    mostrarConfiguracion() {
        $("#app").html(TEMPLATE_CONFIGURACION).hide().delay(0).fadeIn(800);
        uploadTranslateSeccion();
    }

    mostrarDatos() {
        $("#app").html(TEMPLATE_DATOS).hide().delay(0).fadeIn(800);
        uploadTranslateSeccion();
    }

    mostrarError() {
        $("#app").html(TEMPLATE_ERROR).hide().delay(0).fadeIn(800);
        uploadTranslateSeccion();
    }

    // Metodos para agregar handlers de eventos
    agregarHandlerLimpiarPresupuesto(handler) {
        $('#limpiarPresupuesto').click(handler);
    }

    agregarHandlerCotizaciones(handler) {
        $('.cotizaciones').click(handler);
    }

    agregarHandlerReporte(handler) {
        $('#btn-generate-report').click(handler);
    }

    agregarHandlerSumarGasto(handler) {
        $('#btn-get-gasto').click(handler);
    }

    agregarHandlerBorrarGasto(handler) {
        $('.delGasto').click(handler);
    }

    agregarHandlerBorrarUltimosGasto(handler) {
        $('#borrarUltimosGastos').click(handler);
    }

    agregarHandlerSumarIngreso(handler) {
        $('#btn-get-ingreso').click(handler);
    }

    agregarHandlerBorrarIngreso(handler) {
        $('.delIngreso').click(handler);
    }

    agregarHandlerBorrarUltimosIngreso(handler) {
        $('#borrarUltimosIngresos').click(handler);
    }

    agregarHandlerCambiarColorTemaAzul(handler) {
        $('#changeThemeColorBlue').click(handler);
    }

    agregarHandlerCambiarColorTemaVioleta(handler) {
        $('#changeThemeColorViolet').click(handler);
    }

    agregarHandlerAgregarBanco(handler) {
        $('#agregarTipoBanco').click(handler);
    }

    agregarHandlerRemoverBanco(handler) {
        $('#removerTipoBanco').click(handler);
    }

    agregarHandlerAgregarFormaPago(handler) {
        $('#agregarFormaPago').click(handler);
    }

    agregarHandlerRemoverFormaPago(handler) {
        $('#removerFormaPago').click(handler);
    }

    agregarHandlerAgregarTarjeta(handler) {
        $('#agregarTipoTarjeta').click(handler);
    }

    agregarHandlerRemoverTarjeta(handler) {
        $('#removerTipoTarjeta').click(handler);
    }

    agregarHandlerAgregarCategoria(handler) {
        $('#agregarCategoria').click(handler);
    }

    agregarHandlerRemoverCategoria(handler) {
        $('#removerCategoria').click(handler);
    }

    visualizarCotizaciones(event) {

        let id_selecc = "#" + event.target.id;
        let content = "#" + (event.target.id.substring(7)); // Borro la palabra mostrar para selccionar el contenido
        let bandera = content.replace('Cotizaciones', 'Bandera'); // Tomo el id bandera de la moneda
        let horaActualizacion = content.replace('Cotizaciones', 'actualizacion'); // Tomo el id actualizacion de la moneda

        //Animo la Bandera
        $(bandera).animate({
            opacity: 1,
            left: "+=50",
            height: "toggle"
        }, 1000, function() {});

        //Cambio el texto del boton y realizo un toggle
        if ($(content).css("display") == 'none') {
            $(content).toggle("fast");
            $(id_selecc).text("-");

        } else {
            $(content).toggle("fast");
            $(id_selecc).text("+");
        }

        let actualizacion = new Date();
        date_time = actualizacion.getHours() + ":" + (actualizacion.getMinutes() + 1);
        $(horaActualizacion).text(date_time);

        event.preventDefault();
    }

    crearListaIngresos() {
        this.listadeIngresos = new List('listaIngresos', options_Ingresos, data_Ingresos);
    }

    crearListaGastos() {
        this.listadeGastos = new List('listaGastos', options_Gastos, data_Gastos);
    }


    añadiraListaGastos(nuevoGasto) {

        let item_valor = nuevoGasto.nombre;
        let formapago_valor = nuevoGasto.tipoPago;
        let descrip_valor = nuevoGasto.descripcion;
        let precio_valor = nuevoGasto.precio;
        let fecha_valor = nuevoGasto.fecha;
        let id_valor = nuevoGasto.id;
        let objGasto = {
            id: id_valor,
            item: item_valor,
            formapago: formapago_valor,
            descrip: descrip_valor,
            precio: "$" + precio_valor,
            fecha: fecha_valor
        };

        //Lo agrego a la lista completa de ingresos
        this.listadeGastos.add(objGasto);
    }

    añadiraUltimosGastos(nuevoGasto) {

        let item_valor = nuevoGasto.nombre;
        let formapago_valor = nuevoGasto.tipoPago;
        let descrip_valor = nuevoGasto.descripcion;
        let precio_valor = nuevoGasto.precio;
        let fecha_valor = formatDate(nuevoGasto.fecha);
        let id_valor = nuevoGasto.id;

        // listaUltimosGastos
        var contenedor = document.getElementById('listaUltimosGastos');
        var cajaGrande = document.createElement('div');
        cajaGrande.className = "d-flex border-bottom py-2";
        contenedor.appendChild(cajaGrande);

        var cajaChica1 = document.createElement('div');
        cajaChica1.className = "mr-3";
        cajaChica1.innerHTML = ('<h2 class=""><ion-icon name="pricetag-outline"></ion-icon></h2>');

        var cajaChica2 = document.createElement('div');

        let temp_precio = document.createElement('h6');
        temp_precio.className = "d-inline-block ml-0 ";
        temp_precio.textContent = "$" + precio_valor;

        let temp_pago = document.createElement('span');
        temp_pago.className = "badge badge-success ml-2 text-muted";
        temp_pago.textContent = formapago_valor;

        let temp_item = document.createElement('small');
        temp_item.className = "d-block text-muted";
        temp_item.textContent = item_valor;

        cajaChica2.appendChild(temp_precio);
        cajaChica2.appendChild(temp_pago);
        cajaChica2.appendChild(temp_item);
        cajaGrande.appendChild(cajaChica1);
        cajaGrande.appendChild(cajaChica2);

    }

    añadiraListaIngresos(nuevoIngreso) {

        //listaIngresos
        let objIngreso = {
            id: nuevoIngreso.id,
            item: nuevoIngreso.nombre,
            formapago: nuevoIngreso.tipoPago,
            descrip: nuevoIngreso.descripcion,
            precio: "$" + nuevoIngreso.precio,
            fecha: nuevoIngreso.fecha
        };

        //Lo agrego a la lista completa de ingresos
        this.listadeIngresos.add(objIngreso);
    }


    añadirAUltimosingresos(nuevoIngreso) {

        let item_valor = nuevoIngreso.nombre;
        let formapago_valor = nuevoIngreso.tipoPago;
        let descrip_valor = nuevoIngreso.descripcion;
        let precio_valor = nuevoIngreso.precio;
        let fecha_valor = formatDate(nuevoIngreso.fecha);
        let id_valor = nuevoIngreso.id;

        // listaUltimosGastos
        var contenedor = document.getElementById('listaUltimosIngresos');
        var cajaGrande = document.createElement('div');
        cajaGrande.className = "d-flex border-bottom py-2";
        contenedor.appendChild(cajaGrande);

        var cajaChica1 = document.createElement('div');
        cajaChica1.className = "mr-3";
        cajaChica1.innerHTML = ('<h2 class=""><ion-icon name="pricetag-outline"></ion-icon></h2>');

        var cajaChica2 = document.createElement('div');

        let temp_precio = document.createElement('h6');
        temp_precio.className = "d-inline-block ml-0 ";
        temp_precio.textContent = "$" + precio_valor;

        let temp_pago = document.createElement('span');
        temp_pago.className = "badge badge-success ml-2 text-muted";
        temp_pago.textContent = formapago_valor;

        let temp_item = document.createElement('small');
        temp_item.className = "d-block text-muted";
        temp_item.textContent = item_valor;

        cajaChica2.appendChild(temp_precio);
        cajaChica2.appendChild(temp_pago);
        cajaChica2.appendChild(temp_item);
        cajaGrande.appendChild(cajaChica1);
        cajaGrande.appendChild(cajaChica2);
    }


    crearGraficoIngresos(presupuesto) {
        var ctx2 = document.getElementById('myChart2').getContext('2d');

        let labels_ing = [];
        let data_ing = [];

        let lengt_ingresos = presupuesto.Ingresos.length;

        if (lengt_ingresos != 0) {

            for (let j = 0; j < lengt_ingresos; j++) {
                labels_ing.push(presupuesto.Ingresos[j].Id);
                data_ing.push(presupuesto.Ingresos[j].Precio);
            }

            var chart2 = new Chart(ctx2, {
                type: 'line',
                data: {
                    labels: labels_ing,
                    datasets: [{
                        label: 'Ingresos',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: data_ing
                    }]
                },

                // Configuration options go here
                options: {}
            });

        }
    }

    cargarListaIngresos(presupuesto) {
        for (let i = 0; i < presupuesto.Ingresos.length; i++) {

            let objIngresos = {
                id: presupuesto.Ingresos[i].Id,
                item: presupuesto.Ingresos[i].Nombre,
                formapago: presupuesto.Ingresos[i].TipoPago,
                descrip: presupuesto.Ingresos[i].Descripcion,
                precio: "$" + presupuesto.Ingresos[i].Precio,
                fecha: presupuesto.Ingresos[i].Fecha
            };
            this.listadeIngresos.add(objIngresos);
        }
    }


    crearGraficoGastos(presupuesto) {
        var ctx = document.getElementById('myChart').getContext('2d');

        let labels_ing = [];
        let data_ing = [];

        let lengt_gastos = presupuesto.Gastos.length;

        if (lengt_gastos != 0) {

            for (let j = 0; j < lengt_gastos; j++) {
                labels_ing.push(presupuesto.Gastos[j].Id);
                data_ing.push(presupuesto.Gastos[j].Precio);
            }
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels_ing,
                    datasets: [{
                        label: 'Gastos',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: data_ing
                    }]
                },
                options: {}
            });
        }
    }

    cargarListaGastos(presupuesto) {
        for (let i = 0; i < presupuesto.Gastos.length; i++) {

            let objGastos = {
                id: presupuesto.Gastos[i].Id,
                item: presupuesto.Gastos[i].Nombre,
                formapago: presupuesto.Gastos[i].TipoPago,
                descrip: presupuesto.Gastos[i].Descripcion,
                precio: "$" + presupuesto.Gastos[i].Precio,
                fecha: presupuesto.Gastos[i].Fecha
            };
            this.listadeGastos.add(objGastos);
        }
    }

    actualizarPrespupuesto(presupuesto) {

        $('#presupuestoNombre').text(presupuesto.Nombre);
        $('#presupuestoFecha').text(presupuesto.fecha);
        $('#presupuestoIndiceCrecimiento').text(presupuesto.Crecimiento);
    }

    actualizarTablero(presupuesto) {

        $('#presupuestoAcumulados').text(presupuesto.Acumulado);
        $('#presupuestoDisponible').text(presupuesto.Disponible);
        $('#presupuestoGastado').text(presupuesto.Gastado);

        $('#cantidadGastos').text(presupuesto.Gastos.length);
        $('#cantidadIngresos').text(presupuesto.Ingresos.length);

        actualizarColores(presupuesto);
    }


    crearGraficoEstadisticasGastos() {

        var ctx = document.getElementById('GraficoCantidadesGastos').getContext('2d');
        this.graficoCantidadesGastos = new Chart(ctx, config_gastos_cantidades);

        var ctx2 = document.getElementById('GraficoPorcentajesGastos').getContext('2d');
        this.graficoPorcentajesGastos = new Chart(ctx2, config_gastos_porcentajes);

        var ctx3 = document.getElementById('GraficoPreciosGastos').getContext('2d');
        this.graficoPreciosGastos = new Chart(ctx3, config_gastos_precios);
    }

    crearGraficoEstadisticasIngresos() {

        var ctx = document.getElementById('GraficoCantidadesIngresos').getContext('2d');
        this.graficoCantidadesIngresos = new Chart(ctx, config_ingresos_cantidades);

        var ctx2 = document.getElementById('GraficoPorcentajesIngresos').getContext('2d');
        this.graficoPorcentajesIngresos = new Chart(ctx2, config_ingresos_porcentajes);

        var ctx3 = document.getElementById('GraficoPreciosIngresos').getContext('2d');
        this.graficoPreciosIngresos = new Chart(ctx3, config_ingresos_precios);
    }

    borrarDatosGraficosEstadisticas() {
        //Cantidades
        for (let item of indicesGastos.indicesCantidad.values()) {
            removerDatos(this.graficoCantidadesGastos, item.nombre, item.valor);
        }
        for (let item of indicesIngresos.indicesCantidad.values()) {
            removerDatos(this.graficoCantidadesIngresos, item.nombre, item.valor);
        }
        //Porcentajes
        for (let item of indicesGastos.indicesPorcentaje.values()) {
            removerDatos(this.graficoPorcentajesGastos, item.nombre, item.valor);
        }
        for (let item of indicesIngresos.indicesPorcentaje.values()) {
            removerDatos(this.graficoPorcentajesIngresos, item.nombre, item.valor);
        }
        //Precios
        for (let item of indicesGastos.indicesPrecio.values()) {
            removerDatos(this.graficoPreciosGastos, item.nombre, item.valor);
        }
        for (let item of indicesIngresos.indicesPrecio.values()) {
            removerDatos(this.graficoPreciosIngresos, item.nombre, item.valor);
        }
    }

    cargarGraficosEstadisticas() {
        agregarEnGrafico(this.graficoCantidadesIngresos, indicesIngresos.indicesCantidad);
        agregarEnGrafico(this.graficoCantidadesGastos, indicesGastos.indicesCantidad);

        agregarEnGrafico(this.graficoPorcentajesIngresos, indicesIngresos.indicesPorcentaje);
        agregarEnGrafico(this.graficoPorcentajesGastos, indicesGastos.indicesPorcentaje);

        agregarEnGrafico(this.graficoPreciosIngresos, indicesIngresos.indicesPrecio);
        agregarEnGrafico(this.graficoPreciosGastos, indicesGastos.indicesPrecio);
    }

    /* Datos*/
    vaciarLista(lista) {
        $(lista)
            .empty()
            .append('<option selected="selected" value="0">--selecccione--</option>');
    }

    vaciarInput(Input) {
        $(Input).val('');
    }


    vaciarDatosConfig() {
        this.vaciarLista("#categorias");
        this.vaciarLista("#formasPago");
        this.vaciarLista("#tiposBancos");
        this.vaciarLista("#tiposTarjetas");

        this.vaciarInput("#nuevaCategoria");
        this.vaciarInput("#nuevaFormaPago");
        this.vaciarInput("#nuevoBanco");
        this.vaciarInput("#nuevaTarjeta");
    }

    /* UI */
    notificacion(mensaje, color = "#09E4A2") {
        crearNotificacion(mensaje, color);
    }

    cambiarTemaAzul() {
        cambiarTema("blue");
    }

    cambiarTemaVioleta() {
        cambiarTema('#464EB8');
    }

}

// ------------------------------------------//
// ----------------- MODEL ------------------//
// ------------------------------------------//

// Modelo - Agregado, modificado, eliminado y filtrado de datos
class PresupuestoModel {
    constructor() {
        this.presupuesto = new Presupuesto("Nuevo-presupuesto", 0, 0, 0);
        this.presupuestoCargado = false;
        this.configLoad = false;

    }

    crearPresupuesto() {
        console.log("Se crea nuevo presupuesto");
        this.presupuesto = new Presupuesto("Nuevo-presupuesto", 0, 0, 0);
    }

    leerPresupuesto() {

        let presupuestoStr = localStorage.getItem('presupuesto');

        if (presupuestoStr === null) {
            this.presupuestoCargado == false;
            //No se encontró el presupuesto
            return 0;
        }
        //Se encontró el presupuesto.
        this.presupuestoCargado == true;
        this.presupuesto = JSON.parse(presupuestoStr);
        console.log(this.presupuesto);
        return 1;
    }

    leerConfiguracion() {

        let configStr = localStorage.getItem('config');

        if (configStr === null) {
            this.configLoad == false;
            //No se encontró el presupuesto
            return 0;
        }
        //Se encontró el presupuesto.
        this.configLoad == true;
        this.config = JSON.parse(configLoad);

        console.log(this.config);
        return 1;
    }

    cargarPrespupuesto(callback) {
        console.log("Cargando presupuesto...");

        // Si hay presupuestos
        if (this.presupuestoCargado == false) {
            callback();
        } else {
            this.crearPresupuesto();
        }
    }

    guardarPrespupuesto() {
        localStorage.setItem('presupuesto', JSON.stringify(this.presupuesto, null, 4));
    }

    borrarEstadisticas() {
        indicesGastos.indicesCantidad.clear();
        indicesIngresos.indicesCantidad.clear();

        indicesGastos.indicesPrecio.clear();
        indicesIngresos.indicesPrecio.clear();

        indicesGastos.indicesPorcentaje.clear();
        indicesIngresos.indicesPorcentaje.clear();
    }

    actualizarEstadisticas(config) {

        this.borrarEstadisticas();

        calcularEstadisticas(this.presupuesto, config, "Gastos", indicesGastos);
        calcularEstadisticas(this.presupuesto, config, "Ingresos", indicesIngresos);
    }

    procesarCotizaciones(event) {
        //Servicios de Cotizaciones
        servicioDolar();
        servicioReal();
        servicioEuro();
        event.preventDefault();
    }

    agregarGasto(nuevoGasto) {
        this.presupuesto.Gastos.push(nuevoGasto);
        this.presupuesto.Gastado = this.presupuesto.Gastado + nuevoGasto.Precio;
        this.presupuesto.Disponible = this.presupuesto.Disponible - nuevoGasto.Precio;
    }

    agregarIngreso(nuevoIngreso) {
        this.presupuesto.Ingresos.push(nuevoIngreso);
        this.presupuesto.Disponible = this.presupuesto.Disponible + nuevoIngreso.Precio;
        this.presupuesto.Acumulado = this.presupuesto.Acumulado + nuevoIngreso.Precio;
    }

    removerGasto(gasto) {
        removerEnArreglo(gasto, this.presupuesto.Gastos);
        this.presupuesto.Disponible = this.presupuesto.Disponible + gasto.Precio;
        this.presupuesto.Gastado = this.presupuesto.Gastado - gasto.Precio;
    }

    removerIngreso(ingreso) {
        removerEnArreglo(ingreso, this.presupuesto.Ingresos);
        this.presupuesto.Disponible = this.presupuesto.Disponible + ingreso.Precio;
        this.presupuesto.Acumulado = this.presupuesto.Acumulado - ingreso.Precio;
    }


    cargarDatosConfig() {

        var categoriasSelect = document.getElementById('categorias');
        var formasPagoSelect = document.getElementById('formasPago');
        var tiposBancosSelect = document.getElementById('tiposBancos');
        var tiposTarjetaSelect = document.getElementById('tiposTarjetas');

        if (categoriasSelect != null)
            cargarSelect(categoriasSelect, categorias);

        if (formasPagoSelect != null)
            cargarSelect(formasPagoSelect, formasPago);

        if (tiposBancosSelect != null)
            cargarSelect(tiposBancosSelect, tiposBancos);

        if (tiposTarjetaSelect != null)
            cargarSelect(tiposTarjetaSelect, tiposTarjetas);
    }

    guardarDatosConfig() {
        localStorage.setItem('config', JSON.stringify(this.config, null, 4));
    }

}
// ------------------------------------------//
// -------------- CONTROLLER ----------------//
// ------------------------------------------//

// Controller - Acciones del usuario - Usa un modelo y vista
class PresupuestoController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.config = {
            idioma: USER_LANGUAJE_DEFAULT,
            user: USER_DEFAULT,
            categorias,
            formasPago,
            tiposBancos,
            tiposTarjetas
        };
    }

    // Mostrar seccion de tablero
    tablero() {
        if (this.model.leerPresupuesto() == 0) {
            this.view.notificacion("No se encontró el presupuesto.");
        } else {
            this.view.notificacion("Leyendo presupuesto existente.");
            this.model.guardarPrespupuesto();
        }
        this.view.mostrarTablero();
        this.view.actualizarTablero(this.model.presupuesto);
    }

    // Mostrar seccion de presupuesto
    presupuesto() {
        this.view.mostrarPresupuesto();
        this.model.leerPresupuesto();
        this.model.guardarPrespupuesto();
        this.view.actualizarPrespupuesto(this.model.presupuesto);
        this.view.agregarHandlerLimpiarPresupuesto((e) => this.limpiarPresupuesto(e));
    }

    limpiarPresupuesto() {

        this.model.crearPresupuesto();
        this.model.guardarPrespupuesto();
        this.view.actualizarPrespupuesto(this.model.presupuesto);
        this.view.actualizarTablero(this.model.presupuesto);
        this.view.borrarDatosGraficosEstadisticas();
        this.model.actualizarEstadisticas(this.config);
        this.view.notificacion("--> Se limpió el presupuesto");
    }

    // Seccion de Ingresos
    ingresos() {
        this.view.mostrarIngresos();
        this.model.cargarDatosConfig();

        /* Crear  y cargar Lista */
        this.view.crearListaIngresos();
        this.view.cargarListaIngresos(this.model.presupuesto);

        /* Crear gráfico */
        this.view.crearGraficoIngresos(this.model.presupuesto);

        /* handlers*/
        this.view.agregarHandlerSumarIngreso((e) => this.sumarIngreso(e));
        this.view.agregarHandlerBorrarUltimosIngreso((e) => borrarUltimosIngresos(e));
        this.view.agregarHandlerBorrarIngreso((e) => borrarIngreso(e, this.model.presupuesto, this.view.listadeIngresos));
    }

    sumarIngreso(event) {

        event.preventDefault();

        if (validarIngreso(event)) {
            nuevoIngreso = procesarIngreso(event, this.model.presupuesto);

            //Lo agrego al presupuesto
            this.model.agregarIngreso(nuevoIngreso);
            this.model.guardarPrespupuesto();
            this.view.actualizarTablero(this.model.presupuesto);

            //Lo agrego a la lista Ultimos ingresos
            this.view.añadirAUltimosingresos(nuevoIngreso);

            //Lo agrego a la lista de gastos general
            this.view.añadiraListaIngresos(nuevoIngreso);

            this.model.actualizarEstadisticas(this.config);

            this.view.notificacion("--> Se actualizó el presupuesto");

            return true;
        } else {
            swal("Error", "Alguno de los datos ingresados es erróneo", "error")
            return false;
        }

    }

    // Mostrar seccion de Gastos
    gastos() {

        this.view.mostrarGastos();
        this.model.cargarDatosConfig();

        /* Crear Lista */
        this.view.crearListaGastos();
        /* Cargar Lista */
        this.view.cargarListaGastos(this.model.presupuesto);
        /* Crear gráfico */
        this.view.crearGraficoGastos(this.model.presupuesto);

        /* handlers*/
        this.view.agregarHandlerSumarGasto((e) => this.sumarGasto(e));
        this.view.agregarHandlerBorrarUltimosGasto((e) => borrarUltimosGastos(e));
        this.view.agregarHandlerBorrarGasto((e) => borrarGasto(e, this.model.presupuesto, this.view.listadeGastos));
    }



    sumarGasto(event) {

        event.preventDefault();

        if (validarGasto(event)) {
            nuevoGasto = procesarGasto(event, this.model.presupuesto);

            //Lo agrego al presupuesto
            this.model.agregarGasto(nuevoGasto);
            this.model.guardarPrespupuesto();

            this.view.actualizarTablero(this.model.presupuesto);

            //Lo agrego de Ultimos gastos
            this.view.añadiraUltimosGastos(nuevoGasto);

            //Lo agrego a la lista de gastos general
            this.view.añadiraListaGastos(nuevoGasto);


            this.view.notificacion("--> Se actualizó el presupuesto");
            return true;
        } else {
            swal("Error", "Alguno de los datos ingresados es erróneo", "error")
            return false;
        }
    }

    // Mostrar seccion de Estadisticas     
    estadisticas() {

        this.view.mostrarEstadisticas();
        this.model.actualizarEstadisticas(this.config);

        /* Crear gráficos */
        this.view.crearGraficoEstadisticasGastos();
        this.view.crearGraficoEstadisticasIngresos();
        this.view.borrarDatosGraficosEstadisticas();
        this.view.cargarGraficosEstadisticas();
    }

    // Mostrar seccion de Cotizaciones     
    cotizaciones() {
        this.view.mostrarCotizaciones();
        this.view.agregarHandlerCotizaciones((e) => this.actualizarCotizaciones(e));
    }


    actualizarCotizaciones(target) {
        this.model.procesarCotizaciones(target);
        this.view.visualizarCotizaciones(target);
        this.view.notificacion("Se actualizaron las Cotizaciones", "green");
    }

    // Mostrar seccion de Reportes     
    reportes() {
        this.view.mostrarReportes();
        this.view.agregarHandlerReporte((e) => this.generarReporte(e));
    }

    generarReporte(event) {
        crearPdf(this.model.presupuesto);
        event.preventDefault();
    }

    // Mostrar seccion de configuracion     
    configuracion() {
        this.view.mostrarConfiguracion();
        this.view.agregarHandlerCambiarColorTemaAzul((e) => this.view.cambiarTemaAzul(e));
        this.view.agregarHandlerCambiarColorTemaVioleta((e) => this.view.cambiarTemaVioleta(e));
    }

    // Mostrar seccion de datos     
    datos() {
        this.view.mostrarDatos();
        this.model.cargarDatosConfig();

        this.view.agregarHandlerAgregarCategoria((e) => this.sumarOpcionSelect(e, this.config.categorias, "#categorias"));
        this.view.agregarHandlerRemoverCategoria((e) => this.borrarOpcionSelect(e, this.config.categorias, "#categorias"));
        this.view.agregarHandlerRemoverBanco((e) => this.borrarOpcionSelect(e, this.config.tiposBancos, "#tiposBancos"));
        this.view.agregarHandlerAgregarBanco((e) => this.sumarOpcionSelect(e, this.config.tiposBancos, "#tiposBancos"));
        this.view.agregarHandlerRemoverFormaPago((e) => this.borrarOpcionSelect(e, this.config.formasPago, "#formasPago"));
        this.view.agregarHandlerAgregarFormaPago((e) => this.sumarOpcionSelect(e, this.config.formasPago, "#formasPago"));
        this.view.agregarHandlerRemoverTarjeta((e) => this.borrarOpcionSelect(e, this.config.tiposTarjetas, "#tiposTarjetas"));
        this.view.agregarHandlerAgregarTarjeta((e) => this.sumarOpcionSelect(e, this.config.tiposTarjetas, "#tiposTarjetas"));
    }

    borrarOpcionSelect(event, lista, selector) {
        removerOpcion(event, lista, selector);
        this.view.vaciarDatosConfig();
        this.model.guardarDatosConfig();
        this.model.cargarDatosConfig();
        this.view.notificacion("Se eliminó la opción seleccionada");
    }

    sumarOpcionSelect(event, lista, selector) {
        agregarNuevaOpcion(event, lista, selector);
        this.view.vaciarDatosConfig();
        this.view.vaciarInput();
        this.model.guardarDatosConfig();
        this.model.cargarDatosConfig();
        this.view.notificacion("Se agregó nueva opción");

        console.log(this.config);
    }

    // Mostrar seccion de error     
    error() {
        this.view.mostrarError();
    }
}