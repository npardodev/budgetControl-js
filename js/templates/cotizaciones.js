const TEMPLATE_COTIZACIONES = `
   
                       <section class="py-5">
                    <div class="container">
                        <div class="card ">
                            <div class="card-body ">
                                <div class="col-lg-12 d-flex stat my-3">
                                    <div class="col ml-2">
                                        <h4 id="KEY_MONEYS_Main_Title" >Cotizaciones</h4>
                                        <div class="line"></div>

                                    </div>
                                    <div class="col ml-5">
                                        <div class="col d-flex justify-content-around">

                                            <h5>Dolar</h5>
                                            <p id="BanderaDolar">&#x1f1fa;&#x1f1f2;</p>
                                            <button id="mostrarCotizacionesDolar" class="btn btn-primary w-20 align-self-center cotizaciones">-</button>
                                        </div>


                                    </div>
                                    <div class="col ml-5">
                                        <div class="col d-flex justify-content-around">
                                            <h5>Euro</h5>
                                            <p id="BanderaEuro">&#x1f1ea;&#x1f1fa;</p>
                                            <button id="mostrarCotizacionesEuro" class="btn btn-primary w-20 align-self-center cotizaciones">-</button>
                                        </div>

                                    </div>
                                    <div class="col ml-5">
                                        <div class="col d-flex justify-content-around">
                                            <h5>Real</h5>
                                            <p id="BanderaReal">&#x1f1e7;&#x1f1f7;</p>
                                            <button id="mostrarCotizacionesReal" class="btn btn-primary w-20 align-self-center cotizaciones">-</button>
                                        </div>

                                    </div>

                                </div>


                                <div class="card-body" id="CotizacionesDolar">
                                    <div class="row">
                                        <div class="col-lg-3 d-flex stat my-3">
                                            <div class="mx-auto row">
                                                <h3 id="KEY_MONEYS_Dolar_Title">Cotización Dolar</h3>
                                                <h6 class="text-muted" id="KEY_MONEYS_Last_act_Title" >última act: </h6> <h6><span class="text-muted" id="actualizacionDolar">xx:xx:xx</span></h6>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 d-flex stat my-3">
                                            <div class="">
                                                <h6 class="text-muted">Peso Argentino</h6>
                                                <h4 class="font-weight-bold" id="">1 <span> == </span></h4>

                                                <h6>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 d-flex stat my-3">
                                            <div class="">
                                                <h6 class="text-muted">Dolar Oficial</h6>
                                                <div class="d-flex">
                                                <h6 class="font-weiht-bold"  id="KEY_MONEYS_buy_Subtitle"> </h6> <span id="DolarOffCompra"> $00,00</span>
                                                </div>
                                                <div class="d-flex">
                                                <h6 class="font-weiht-bold" id="KEY_MONEYS_sold_Subtitle"></h6> <span id="DolarOffVenta"> $00,00</span>
                                                </div>
                                                <div class="d-flex">
                                                <h6 class="font-weiht-bold" id="KEY_MONEYS_variation_Subtitle"></h6>  <span id="DolarOffVariacion"> $00,00</span>
                                                </div>
                                                <h6>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 d-flex stat my-3">
                                            <div class="">
                                                <h6 class="text-muted">Dolar Blue</h6>
                                                <h6 class="font-weiht-bold" id="KEY_MONEYS_buy_Subtitle"></h6> </h6><span id="DolarBlueCompra">$00,00</span></h6>
                                                <h6 class="font-weiht-bold" id="KEY_MONEYS_sold_Subtitle"></h6> </h6><span id="DolarBlueVenta">$00,00</span></h6>
                                                <h6 class="font-weiht-bold" id="KEY_MONEYS_variation_Subtitle"></h6> </h6>Variacion: <span id="DolarBlueVariacion">$00,00</span></h6>
                                                <h6>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="card-body" id="CotizacionesEuro">
                                    <div class="row">
                                        <div class="col-lg-3 d-flex stat my-3">
                                            <div class="mx-auto row">
                                                <h3 id="KEY_MONEYS_Euro_Title">Cotización Euro</h3>
                                                <h6 class="text-muted" id="KEY_MONEYS_Last_act_Title" >última act: </h6> <h6><span class="text-muted" id="actualizacionEuro">xx:xx:xx</span></h6>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 d-flex stat my-3">
                                            <div class="">
                                                <h6 class="text-muted">Euro</h6>
                                                <h6 class="font-weiht-bold" id="KEY_MONEYS_buy_Subtitle">Compra: <span id="EuroCompra">$00,00</span></h6>
                                                <h6 class="font-weiht-bold" id="KEY_MONEYS_sold_Subtitle">Venta: <span id="EuroVenta"> $00,00</span></h6>
                                                <h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-body" id="CotizacionesReal">
                                    <div class="row">
                                        <div class="col-lg-3 d-flex stat my-3">
                                            <div class="mx-auto row">
                                                <h3 id="KEY_MONEYS_Real_Title">Cotización Real</h3>
                                                <h6 class="text-muted" id="KEY_MONEYS_Last_act_Title" >última act: </h6> <h6><span class="text-muted" id="actualizacionReal">xx:xx:xx</span></h6>
                                            </div>
                                        </div>
                                        <div class="col-lg-3 d-flex stat my-3">
                                            <div class="">
                                                <h6 class="text-muted">Real</h6>
                                                <h6 class="font-weiht-bold" id="">Compra: <span id="RealCompra">$00,00</span></h6>
                                                <h6 class="font-weiht-bold" id="">Venta: <span id="RealVenta"> $00,00</span></h6>
                                                <h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

`;