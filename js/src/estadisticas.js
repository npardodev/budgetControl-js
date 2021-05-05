function calcularEstadisticas(presupuesto, config, listaAbuscar, indicesAcalcular) {

    const MAX_CATEGORIAS = config.categorias.length;
    let arrayCategorias = Array(MAX_CATEGORIAS);
    let arrayCantidades = Array(MAX_CATEGORIAS);
    let arrayPrecios = Array(MAX_CATEGORIAS);
    let arrayPorcentajes = Array(MAX_CATEGORIAS);

    let lista;
    let Categ = [];

    for (let i = 0; i < MAX_CATEGORIAS; i++) {
        Categ.push(config.categorias[i].name);
    }

    //Los inicializo vacios y en 0.
    for (let j = 0; j < MAX_CATEGORIAS; j++) {
        arrayCategorias[j] = Categ[j];
        arrayCantidades[j] = 0;
        arrayPrecios[j] = 0;
    }

    if (listaAbuscar == "Gastos")
        lista = presupuesto.Gastos;

    else if (listaAbuscar == "Ingresos")
        lista = presupuesto.Ingresos;

    if (lista.length == 0)
        return

    //RecorroGastos 
    for (let j = 0; j < lista.length; j++) {

        let cateogriaLeida = lista[j].Categoria;
        let precioLeido = lista[j].Precio;
        let suma = lista.length;

        //Calculo Cantidades y calculo precios
        for (let i = 0; i < lista.length; i++) {
            if (Categ[i] == cateogriaLeida) {
                console.log("entre");
                arrayCantidades[i]++;
                arrayPrecios[i] = arrayPrecios[i] + precioLeido;
            }

        }
        //Calculo Porcentajes 
        for (let i = 0; i < Categ.length; i++) {
            if (Categ[i] == cateogriaLeida) {
                arrayPorcentajes[i] = (((arrayCantidades[i] / suma) * 100).toFixed(2));
            }
        }

    }

    if (listaAbuscar == "Gastos") {
        // Gastos
        for (let j = 0; j < MAX_CATEGORIAS; j++) {
            if (arrayCantidades[j] != 0) {
                let categoria = String(arrayCategorias[j]).toLowerCase();
                indicesAcalcular.indicesCantidad.add({ nombre: categoria, valor: arrayCantidades[j] });
                indicesAcalcular.indicesPrecio.add({ nombre: categoria, valor: arrayPrecios[j] });
                indicesAcalcular.indicesPorcentaje.add({ nombre: categoria, valor: arrayPorcentajes[j] });
            }
        }
    } else if (listaAbuscar == "Ingresos") {
        // Ingresos
        for (let j = 0; j < MAX_CATEGORIAS; j++) {
            if (arrayCantidades[j] != 0) {
                let categoria = String(arrayCategorias[j]).toLowerCase();
                indicesAcalcular.indicesCantidad.add({ nombre: categoria, valor: arrayCantidades[j] });
                indicesAcalcular.indicesPrecio.add({ nombre: categoria, valor: arrayPrecios[j] });
                indicesAcalcular.indicesPorcentaje.add({ nombre: categoria, valor: arrayPorcentajes[j] });
            }
        }
    }
}