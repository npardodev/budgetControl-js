  // ------------------------------------------//
  // ---------------- OBJETO : ----------------//
  // ---------------- GASTO -------------------//
  // ------------------------------------------//

  class Gasto {

      constructor(nombre, id, descrip, catego, precio, tipoPago) {
          this.Nombre = nombre;
          this.Id = id;
          this.Descripcion = descrip.toLowerCase();
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

      get tipoPago() {
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

      set precio(value) {
          this.Precio = value;
      }

      set categoria(cat) {
          this.Categoria = cat;
      }

      set tipoPago(value) {
          this.TipoPago = value;
      }

      set descripcion(texto) {
          this.Descripcion = texto;
      }

  }


  // --------------------------------------------//
  // ------------ Funciones Gastos --------------//
  // --------------------------------------------//

  function crearGasto(nombre, id, description, catego, precio, tipodePago) {

      nuevo_gasto = new Gasto(nombre, id, description, catego, precio, tipodePago);
      return nuevo_gasto;
  }


  function leerGastos() {

      let listaGastos = JSON.parse(localStorage.getItem('Gastos'));
      if (!listaGastos) {
          listaGastos = [];
      }
      return listaGastos;
  }



  function añadirGasto(nuevoGasto) {

      let item_valor = nuevoGasto.nombre;
      let formapago_valor = nuevoGasto.tipoPago;
      let descrip_valor = nuevoGasto.descripcion;
      let precio_valor = nuevoGasto.precio;
      let fecha_valor = nuevoGasto.fecha;
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


  function validarGasto(e) {


      let formulario = document.getElementById("gastos");

      var maxInputCharact = 10;

      let item = formulario.itemGasto;
      let descrip = formulario.descripGasto;
      let valor = formulario.valorGasto;

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

  function sumarGasto(event) {

      event.preventDefault();

      if (validarGasto(event)) {
          procesarGasto(event);
          actualizarTodo(presupuesto);

          return true;
      } else {
          swal("Error", "Alguno de los datos ingresados es erróneo", "error")
          return false;
      }

  }


  function procesarGasto(e, presupuesto) {

      e.preventDefault();

      let item = document.getElementById("itemGasto").value;
      let descrip = document.getElementById("descripGasto").value;
      let valor = document.getElementById("valorGasto").value;

      let option_sel_cat = '#categorias' + " option:selected";
      let categoria = $(option_sel_cat).text();
      let option_sel_fp = '#formasPago' + " option:selected";
      let tipodePago = $(option_sel_fp).text();

      nuevoGasto = crearGasto(item, presupuesto.Gastos.length + 1, descrip, categoria, valor, tipodePago);

      return nuevoGasto;
  }

  function borrarUltimosGastos() {
      $("#listaUltimosGastos").empty();
      console.log("Se borró la lista de últimos gastos.");
  }


  function borrarGasto(event, presupuesto, lista) {

      var par = $(event.target.parentElement);
      let item_id = $(par.parent()).find('.id').text();

      console.log('Se borrará  ' + item_id + ' del presupuesto.');
      gastoAborrar = presupuesto.Gastos.find(x => x.Id === item_id);

      //Elimino del presupuesto
      if (gastoAborrar != null && gastoAborrar != undefined) {
          presupuesto.removerIngreso(gastoAborrar);
          console.log('Se borró el Gasto nro: ' + item_id + ' del presupuesto.');
      } else
          console.log('No se pudo borrar el Gasto nro: ' + item_id + ' del presupuesto.');

      //Elimino de la lista
      listadeGastos.remove('id', item_id); // return 1

  }