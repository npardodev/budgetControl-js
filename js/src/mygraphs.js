var graphColors = [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(107,142,35)',
    'rgb(0,255,255)',
    'rgb(255,0,255)',
    'rgb(210,105,30)',
    'rgb(255,250,240)',
    'rgb(178,34,34)',
    'rgb(0,255,255)',
    'rgb(255,0,255)',
    'rgb(210,105,30)',
    'rgb(255,250,240)',
    'rgb(178,34,34)'
];


// --------------------------------------------//
// ------- Funciones para graficos ------------//
// --------------------------------------------//

function agregarDatos(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removerDatos(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}


function borrarEnGrafico(grafico, arregloIndices) {

    for (let item of arregloIndices.values()) {
        removerDatos(grafico, item.nombre, item.valor);
    }
}

function agregarEnGrafico(grafico, arregloIndices) {

    for (let item of arregloIndices.values()) {
        agregarDatos(grafico, item.nombre, item.valor);
    }
}


// ------------------------------------------//
// --------- Estadisticas Ingresos ----------//
// ------------------------------------------//

//Cantidades
var data_ingresos_cantidades = {
    labels: [],
    datasets: [{
        label: 'Estadisticas Cantidades Ingresos',
        data: [],
        backgroundColor: graphColors,
        hoverOffset: 4
    }]
};

var config_ingresos_cantidades = {
    type: 'doughnut',
    data: data_ingresos_cantidades
};

//Precios
var data_ingresos_precios = {
    labels: [],
    datasets: [{
        label: 'Estadisticas Precios ingresos',
        data: [],
        backgroundColor: graphColors,
        hoverOffset: 4
    }],
};

var config_ingresos_precios = {
    type: 'pie',
    data: data_ingresos_precios,
};

//Porcentajes
var data_ingresos_porcentajes = {
    labels: [],
    datasets: [{
        label: 'Estadisticas Porcentajes ingresos',
        data: [],
        backgroundColor: graphColors,
        hoverOffset: 4
    }]
};

var config_ingresos_porcentajes = {
    type: 'doughnut',
    data: data_ingresos_porcentajes,
};

// ------------------------------------------//
// --------- Estadisticas  Gastos -----------//
// ------------------------------------------//

//Cantidades
var data_gastos_cantidades = {
    labels: [],
    datasets: [{
        label: 'Estadisticas Cantidades Gastos',
        data: [],
        backgroundColor: graphColors,
        hoverOffset: 4
    }]
};

var config_gastos_cantidades = {
    type: 'doughnut',
    data: data_gastos_cantidades,
};

//Precios
var data_gastos_precios = {
    labels: [],
    datasets: [{
        label: 'Estadisticas Precios Gastos',
        data: [],
        backgroundColor: graphColors,
        hoverOffset: 4
    }]
};

var config_gastos_precios = {
    type: 'pie',
    data: data_gastos_precios,
};

//Porcentajes
var data_gastos_porcentajes = {
    labels: [],
    datasets: [{
        label: 'Estadisticas Porcentajes Gastos',
        data: [],
        backgroundColor: graphColors,
        hoverOffset: 4
    }]
};

var config_gastos_porcentajes = {
    type: 'doughnut',
    data: data_gastos_porcentajes,
};


// --------------------------------------------//
// ----------  graficos Generales -------------//
// --------------------------------------------//