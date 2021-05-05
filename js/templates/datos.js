const TEMPLATE_DATOS = `
<section class="">

<div class="container mx-3 my-3">
    <div class="row d-flex text-center">
    </div>

    <form action="">

        <!-- Fila 1 -->
        <div class="row  d-flex justify-content-around  ">
            <!-- Col 1 -->
            <div class="card col-lg-5 ">
                                <h4 class="d-flex justify-content-center py-1" id= "KEY_DATA_Cat_title">Categorias</h4>
                <div class="card-body ">
                    <div class="form-group d-flex justify-content-around py-2">
                        <label for="categorias" id = "KEY_DATA_Cat_Edit_subtitle">Ver / Eliminar</label>
                        <select id="categorias">
                            <option value="0">--selecccione--</option>
                        </select>
                        <button id="removerCategoria" class="btn btn-primary w-20 align-self-center"> - </button>
                    </div>
                    <div class=" d-flex justify-content-around py-2">
                    <div class="form-group  d-flex justify-content-around ">
                        <label for="nuevaCategoria" id = "KEY_DATA_Cat_add_subtitle">Agregar: </label>
                        <input type="text" id="nuevaCategoria" class=" form-control centrar-texto" placeholder="Nueva Categoria" name="item" minlength="1" maxlength="40">
                    </div>
                    <div class="">
                        <button id="agregarCategoria" class="btn btn-primary w-10 align-self-center"> + </button>
                    </div>
                 </div>

                </div>
            </div>
            <!-- col 2 -->
            <div class="card col-lg-5 ">
            <h4 class="d-flex justify-content-center py-1" id = "KEY_DATA_Payments_title">Formas de Pago / Cobro</h4>
                <div class="card-body ">
                    <div class="form-group d-flex justify-content-around py-2">
                        <label for="formasPago" id = "KEY_DATA_Payments_Edit_subtitle">Ver / Eliminar</label>
                        <select id="formasPago">
                            <option value="0">--selecccione--</option>
                        </select>
                        <button id="removerFormaPago" class="btn btn-primary w-20 align-self-center"> - </button>
                    </div>
                    <div class=" d-flex justify-content-around py-2">

                        <div class="form-group  d-flex justify-content-around ">
                            <label for="nuevaFormaPago" id = "KEY_DATA_Payments_add_subtitle">Agregar: </label>
                            <input type="text" id="nuevaFormaPago" class=" form-control centrar-texto" placeholder="Nueva Forma de pago" name="item" minlength="1" maxlength="40">
                        </div>
                        <div class="">
                            <button id="agregarFormaPago" class="btn btn-primary w-10 align-self-center"> + </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</div>


<!-- Fila 2 -->
<div class="container mx-3 my-3">
    <div class="row  d-flex justify-content-around  ">
        <!-- Col 1 -->
        <div class="card col-lg-5 ">
        <h4 class="d-flex justify-content-center py-1" id = "KEY_DATA_Cards_title">Tarjetas</h4>
            <div class="card-body ">
                <div class="form-group d-flex justify-content-around py-2">
                    <label for="tiposTarjetas" id = "KEY_DATA_Cards_Edit_subtitle">Ver / Eliminar</label>
                    <select id="tiposTarjetas">
                            <option value="0">--selecccione--</option>
                        </select>
                    <button id="removerTipoTarjeta" class="btn btn-primary w-20 align-self-center"> - </button>
                </div>

                <div class=" d-flex justify-content-around py-2">

                    <div class="form-group  d-flex justify-content-around ">
                        <label for="nuevaTarjeta" id = "KEY_DATA_Cards_add_subtitle">Agregar: </label>
                        <input type="text" id="nuevaTarjeta" class=" form-control" placeholder="Nueva tarjeta" name="item" minlength="1" maxlength="40">
                    </div>   
                    <div class="">
                    <button id="agregarTipoTarjeta" class="btn btn-primary w-10 align-self-center"> + </button>
                    </div>

                </div>

            </div>
        </div>
        <!-- col 2 -->
        <div class="card col-lg-5 ">
        <h4 class="d-flex justify-content-center py-1" id = "KEY_DATA_Banks_title">Bancos</h4>

            <div class="card-body ">
                <div class="form-group d-flex justify-content-around py-2">
                    <label for="tiposBancos" id="KEY_DATA_Banks_Edit_subtitle">Ver / Eliminar</label>
                    <select id="tiposBancos">
                    <option value="0">--selecccione--</option>
                    </select>
                    <button id="removerTipoBanco" class="btn btn-primary w-20 align-self-center"> - </button>
                </div>

                <div class=" d-flex justify-content-around py-2">

                    <div class="form-group  d-flex justify-content-around ">
                        <label for="nuevoBanco" id = "KEY_DATA_Banks_add_subtitle">Agregar: </label>  
                        <input type="text" id="nuevoBanco" class=" form-control centrar-texto" placeholder="Nueva tarjeta" name="item" minlength="1" maxlength="40">
                    </div>   
                    <div class="">
                        <button id="agregarTipoBanco" class="btn btn-primary w-10 align-self-center"> + </button>
                    </div>   
                </div>
            </div>
        </div>
    </div>
    </form>

</div>
</section>

`;