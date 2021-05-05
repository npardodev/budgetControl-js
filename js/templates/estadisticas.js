const TEMPLATE_ESTADISTICAS = `

				<section>
                    <div class="container">

                        <div class="row d-flex justify-content-around">
                            <div class="col-lg-5 my-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 id="KEY_STATISTICS_Quant_Expenses_Graph_Title"> Grafico cantidad de Gastos</h5>
                                    </div>
                                    <div class="card-body">
                                        <canvas id="GraficoCantidadesGastos"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-5 my-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 id="KEY_STATISTICS_Quant_Income_Graph_Title"> Grafico cantidad de Ingresos</h5>
                                    </div>
                                    <div class="card-body">
                                        <canvas  id="GraficoCantidadesIngresos"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row d-flex justify-content-around">
                            <div class="col-lg-5 my-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 id="KEY_STATISTICS_Percentages_Expenses_Graph_Title"> Grafico Porcentajes de Gastos</h5>
                                    </div>
                                    <div class="card-body">
                                        <canvas id="GraficoPorcentajesGastos"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-5 my-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 id="KEY_STATISTICS_Percentages_Income_Graph_Title"> Grafico Porcentajes de Ingresos</h5>
                                    </div>
                                    <div class="card-body">
                                        <canvas id="GraficoPorcentajesIngresos"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row d-flex justify-content-around">
                            <div class="col-lg-5 my-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 id="KEY_STATISTICS_Price_Expenses_Graph_Title">Grafico Precios de Gastos</h5>
                                    </div>
                                    <div class="card-body">
                                        <canvas id="GraficoPreciosGastos"></canvas>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-5 my-3">
                                <div class="card">
                                    <div class="card-header">
                                        <h5 id="KEY_STATISTICS_Price_Income_Graph_Title">Grafico Precios de Ingresos</h5>
                                    </div>
                                    <div class="card-body">
                                        <canvas id="GraficoPreciosIngresos"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5 my-3">
                        <div class="card">
                         </div>
                    </div>
        
                </section>
`;