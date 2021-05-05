// Colores
var colors = {
    rojo_10: '#db3033',
    rojo_9: '#c82b2f',
    rojo_8: '#b6272b',
    rojo_7: '#a42327',
    rojo_6: '#921f23',
    rojo_5: '#811b1f',
    rojo_4: '#70171b',
    rojo_3: '#601317',
    rojo_2: '#4f1012',
    rojo_1: '#400c0c',
    rojo_0: '#3C0B0B',
    //------------------
    verde_10: '#0b260a',
    verde_9: '#0d3310',
    verde_8: '#0f4014',
    verde_7: '#124e18',
    verde_6: '#155d1b',
    verde_5: '#186b1e',
    verde_4: '#1b7b22',
    verde_3: '#1e8a25',
    verde_2: '#229a27',
    verde_1: '#27aa2a',
    verde_0: '#27aa2a',
    //------------------
    azul_1: '#98BFEB',
    azul_2: '#3581d8',
    azul_3: '#2161AB'
};

// Rangos de Corte
const STEP_0 = 0;
const STEP_1 = 10000;
const STEP_2 = 50000;
const STEP_3 = 100000;
const STEP_4 = 250000;
const STEP_5 = 500000;
const STEP_6 = 1000000;
const STEP_7 = 2500000;
const STEP_8 = 5000000;
const STEP_9 = 7500000;
const STEP_10 = 10000000;


let Color_Steps_positives = {
    ranges: [STEP_0, STEP_1, STEP_2, STEP_3, STEP_4, STEP_4, STEP_5, STEP_6, STEP_7, STEP_8, STEP_9, STEP_10],
    colors: [colors.verde_0, colors.verde_1, colors.verde_2, colors.verde_3, colors.verde_4, colors.verde_5, colors.verde_6, colors.verde_7, colors.verde_8, colors.verde_9, colors.verde_10]
};


let Color_Steps_negatives = {
    ranges: [STEP_0, -STEP_1, -STEP_2, -STEP_3, -STEP_4, -STEP_4, -STEP_5, -STEP_6, -STEP_7, -STEP_8, -STEP_9, -STEP_10],
    colors: [colors.rojo_0, colors.rojo_1, colors.rojo_2, colors.rojo_3, colors.rojo_4, colors.rojo_5, colors.rojo_6, colors.rojo_7, colors.rojo_8, colors.rojo_9, colors.rojo_10]
};


function setearColor(variable) {

    // Default
    var color = colors.azul_1;

    if (variable > 0) {
        for (let i = 0; i < Color_Steps_positives.ranges.length - 1; i++) {
            if (variable > Color_Steps_positives.ranges[i]) {
                color = Color_Steps_positives.colors[i];
            }
        }
    }

    if (variable < 0) {
        for (let i = 0; i < Color_Steps_negatives.ranges.length - 1; i++) {
            if (variable > Color_Steps_negatives.ranges[i]) {
                color = Color_Steps_negatives.colors[i];
            }
        }
    }

    return color;
}


function cambiarTema(color) {
    $("body").get(0).style.setProperty("--primary", color);
    $("body").get(0).style.setProperty("--ligth", color);
}


function crearNotificacion(mensaje, color = "#09E4A2") {
    const randomId = Math.random().toString(36).substring(7);
    $('#notification').append(`<div class="notificacion" id="${randomId}" style="display: none; height: 22px; ">${mensaje}</div>`);

    // aparece y desaparece la notificacion
    $(`#${randomId}`).css("background-color", color).fadeIn(600).delay(600).fadeOut(600, () => {
        $(`#${randomId}`).remove();
    });
}

function actualizarColores(presupuesto) {

    changeColor('presupuestoAcumulados', setearColor(presupuesto.Acumulado));
    changeColor('presupuestoGastado', setearColor(presupuesto.Gastado));
    changeColor('presupuestoDisponible', setearColor(presupuesto.Disponible));
}

function changeColor(elementobyId, color) {
    $("#" + elementobyId).css("color", color);
}