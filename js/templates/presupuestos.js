const TEMPLATE_PRESUPUESTO = `
    <section>
                    <div class="container">
                        <div class="card">
                            <div class="card-body">

                                <div class="row">
                                    <div class="col-lg-3 d-flex stat my-3">
                                        <div class="mx-auto row">
                                            <h5 id="KEY_BUDGET_Name_Title" >Nombre Presupuesto</h5>
                                            <div class="line"></div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 d-flex stat my-3">
                                        <div class="mx-auto">
                                            <h6 id="presupuestoNombre" class="text-muted">nombre</h6>
                                        </div>
                                    </div>    
                                    <div class="col-lg-3 d-flex stat my-3">
                                        <div class="mx-auto row">
                                            <h5 id="KEY_BUDGET_Date_Title" >Fecha de creacion</h5>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 d-flex stat my-3">
                                        <div class="mx-auto">
                                            <h6 id="presupuestoFecha" class="text-muted">fecha</h6>
                                        </div>
                                    </div>    
                                                

                                </div>


                                <div class="row">
                                    <div class="col-lg-3 d-flex stat my-3">
                                        <div class="mx-auto row">
                                            <h5 id="KEY_BUDGET_Index_Title">Indice Crecimiento</h5>
                                        </div>
                                    </div>
                                    <div class="col-lg-9 d-flex stat my-3">
                                        <div class="mx-auto">
                                            <h6 id="presupuestoIndiceCrecimiento" class="text-muted">indice</h6>
                                            <ion-icon name="arrow-up"></ion-icon>---</h6>

                                        </div>
                                    </div>                          
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="py-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-9">
                                <h4 class="">Acciones </h1>
                                <h5 id="KEY_BUDGET_Empty_Title" class="text-muted">Vaciar presupuesto </h5>
                            </div>
                           
                            <div class="col-lg-3 d-flex">
                                <button id="limpiarPresupuesto" class="btn btn-primary w-100 align-self-center"> <span id="KEY_BUDGET_Clean_Title" class="btn btn-primary">Limpiar Presupuesto</span> </button>
                            </div>
                        </div>
                    </div>
                </section>
`;