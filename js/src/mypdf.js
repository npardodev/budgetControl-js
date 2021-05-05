// ------------------------------------------//
// ----------- En Desarrollo... -------------//
// ------------------------------------------//

const SEPARATOR = " - ";

/**
 * Funcion para generar el reporte PDF 
 * @param  {Object} presupuesto  Presupuesto con sus datos.
 * @return {}      
 */
function crearPdf(presupuesto) {

    const doc = new jsPDF();

    crearTitulo(doc, "Resumen", 80, 10);
    imprimirPresupuesto(doc, presupuesto);
    imprimirGastos(doc, presupuesto);
    imprimirIngresos(doc, presupuesto);
    imprimirFooter(doc);

    doc.save("Reporte.pdf");
}


function crearTitulo(doc, text, x, y) {

    doc.setFontType("bold");
    doc.setFontSize(16);
    doc.setLineWidth(0, 5);
    doc.setDrawColor(0, 0, 255);
    doc.setTextColor(0, 0, 0);

    doc.text(text, x, y);
    doc.setDrawColor(10, 10, 255);

    doc.line(x - 4, y + 4, x + 4, y + 4);
}



function imprimirPresupuesto(doc, presupuesto) {

    doc.setFont("courier");
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.text("Nombre: " + presupuesto.Nombre, 10, 20);
    doc.text("Fecha: " + formatDate(presupuesto.Fecha), 10, 25);
    doc.text("Gastado: " + presupuesto.Gastado, 10, 30);
    doc.text("Disponible: " + presupuesto.Disponible, 10, 35);

    doc.setLineWidth(1);
    doc.setDrawColor(0);
    doc.setFillColor(255, 0, 0);
}

function imprimirLista(doc, lista, x, y, offset) {

    doc.setFontSize(12);
    for (let j = 0; j < lista.length; j++) {
        doc.text(lista[j].Id + SEPARATOR + lista[j].Nombre + SEPARATOR + lista[j].Precio + SEPARATOR +
            lista[j].Descripcion + SEPARATOR + formatDate(lista[j].Fecha), x, y + 6 * j);
    }
}

function imprimirGastos(doc, presupuesto) {

    doc.addPage();

    doc.setFontSize(16);
    doc.setDrawColor(0, 0, 255);
    doc.text("Gastos: ", 10, 10);

    doc.setFontSize(12);
    doc.setDrawColor(0, 0, 255);

    /* Imprimo Gastos*/
    imprimirLista(doc, presupuesto.Gastos, 10, 15, 10);

}


function imprimirIngresos(doc, presupuesto) {

    doc.addPage();

    doc.setFontSize(16);
    doc.setDrawColor(0, 0, 255);
    doc.text("Ingresos: ", 10, 10);

    /* Imprimo Gastos*/
    doc.setFontSize(12);
    doc.setDrawColor(0, 0, 255);

    imprimirLista(doc, presupuesto.Ingresos, 10, 15, 6);
}

function imprimirFooter(doc) {

    const pages = doc.internal.getNumberOfPages();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    for (let j = 1; j < pages + 1; j++) {
        let horizontalPos = pageWidth / 2;
        let verticalPos = pageHeight - 10;
        doc.setPage(j);
        doc.setTextColor(0, 0, 0);
        doc.setFontType("bold");
        doc.setFontSize(8);
        doc.text("Control de gastos ©", pageWidth / 2 - 10, pageHeight - 15);
        doc.setFontType("normal");
        doc.setFontSize(10);
        doc.text(`${j} of ${pages}`, horizontalPos, verticalPos, { align: 'center' }); //Optional text styling});
    }

}