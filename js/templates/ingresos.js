const TEMPLATE_INGRESOS = `

             <div class="container mx-3">
                        <div class="row">
                            <!-- Ingresos -->
                            <div class="card col-lg-6 py-1">
                              

                                <div class="card-body">
                                    <form id="ingresos" action="">
                                        <div class="row text-center ">
                                            <div class="col-md-8 d-flex stat ">
                                                <div class="row">
                                                    <div class="form-group col">
                                                        <label for="itemIngreso" id = "KEY_INCOME_Add_item_subtitle">Item:</label>
                                                        <input type="text" id="itemIngreso" class="form-control centrar-texto" placeholder="Nombre del item" name="item" required minlength="1" maxlength="40">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-4 d-flex stat ">
                                                <div class="row">
                                                    <div class="form-group ">
                                                        <label for="valorIngreso" id = "KEY_INCOME_Add_value_subtitle">Valor:</label>
                                                        <input type="number" id="valorIngreso" class=" form-control centrar-texto" placeholder="Precio" name="item" required minlength="1" maxlength="40">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col d-flex justify-content-between">
                                            <div class=" form-group  py-1">
                                                <div class="form-group">
                                                    <label for="categorias" id = "KEY_INCOME_Add_cat_subtitle">Categorias</label>
                                                    <select class="form-control" id="categorias">
                                                        <option value="0" disabled selected>-- Seleccione --</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group py-1 ">
                                                <div class=" form-group">
                                                    <label for="formasPago" id = "KEY_INCOME_Add_payment_subtitle">Formas de pago</label>
                                                    <select class="form-control" id="formasPago">
                                                         <option value="0" disabled selected>-- Seleccione --</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row text-center my-1">
                                            <div class="form-group">
                                                <label class="centrar-texto" for="descrip-ingreso" id = "KEY_INCOME_Add_descrip_subtitle"> Descripción: </label>
                                                <textarea class="form-control centrar-texto" id="descripIngreso" rows="3" placeholder="Descripcion del ingreso" maxlength="255" required></textarea>
                                            </div>
                                        </div>

                                        <div class="row text-center">

                                            <div class="col text-center justify-content-around">
                                                <button class="buttons" id="btn-get-ingreso" id = "KEY_INCOME_Add_save_subtitle">Guardar </button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>

                            <div class="col d-flex stat mx-auto my-3 justify-content-around">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h1 class="" id="KEY_INCOME_Main_title">Añadir </h1>
                                    <div class="line"></div>
                                </div>
                            </div>
                               <img src="./img/ingresos.svg" alt="Imagen ingresos" width="250" height="250">
                            </div>
                        </div>

                     </div>


                     <section>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-8 my-3">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5 id = "KEY_INCOME_Graph_Title">Grafico Anual</h5>
                                            </div>
                                            <div class="card-body">
                                                <canvas id="myChart2"></canvas>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-lg-4 my-3">
                                        <div class="card">
                                            <div class="card-header">
                                                <div class="col  d-flex justify-content-around p-2">
                                                    <h5 id = "KEY_INCOME_LastList_Title">Agregados recientes </h5>
                                                    <button id="borrarUltimosIngresos" class="btn btn-primary w-20 align-self-center">c</button>
                                                </div>
                                            </div>

                                            <div class="card-body" id="listaUltimosIngresos">

                                            </div>

                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </section>



                        <section>
                    <div class="container">
                        <div id="listaIngresos" class="card">
                            <div class="card-body">
                                <h3 id = "KEY_INCOME_CompleteList_Title">Lista completa de ingresos</h3>
                                <div class="row mt-3">
                                    <div class="col-10">
                                        <input type="search" class="search form-contorl" placeholder="Buscar aqui...">
                                    </div>

                                    <div class="col-2">
                                        <div class="dropdown">
                                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">sort
                            </button>
                                            <ul class="dropdown-menu ">
                                                <li class="sort" data-sort="item">
                                                    <a class="dropdown-item" href="#"></a>por nombre</li>
                                                <li class="sort" data-sort="id">
                                                    <a class="dropdown-item" href="#"></a>por id</li>
                                                <li class="sort" data-sort="descrip">
                                                    <a class="dropdown-item" href="#"></a>por descipcion</li>
                                                <li class="sort" data-sort="precio">
                                                    <a class="dropdown-item" href="#"></a>por precio</li>
                                                <li class="sort" data-sort="date">
                                                    <a class="dropdown-item" href="#"></a>por fecha</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ul class="list list-group list-group-flush"></ul>
                                <div class="d-flex justify-content-center mt-2">
                                    <ul class="pagination">

                                    </ul>
                                </div>
                            </div>
                            <div style=" display: none;"></div>
                            <li id="myitem2" class="list-group-item">
                                <h4 class="item mb-0"></h4>
                                <h6 class="id "></h6>

                                <div class="d-flex justify-content-between">
                                    <small class="formapago text-muted pr-2"></small>
                                    <p class="descrip px-5"></p>
                                </div>

                                <div class="d-flex justify-content-between">
                                    <div class="precio"></div>
                                    <div class="fecha"></div>
                                    <button class="delIngreso" class="btn"><i ><ion-icon name="trash-outline"></ion-icon></i></button>
                                </div>
                            </li>
                        </div>
                    </div>
                </section>

`;