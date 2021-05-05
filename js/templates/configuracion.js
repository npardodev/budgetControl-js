const TEMPLATE_CONFIGURACION = `

                <section class="py-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="" id="KEY_CONFIGURATION_Languaje_title">Idioma </h1>
                                <h2 class="text-muted" id="KEY_CONFIGURATION_Languaje_subtitle">Seleccionar opcion </h2>
                            </div>
                            <div class="col-lg-3 d-flex justify-content-around p-2">
                              <button id="changeLanguage_EN" class="btn btn-primary w-20 mx-1 align-self-center" onclick="i18next.changeLanguage('en')">English</button>
                              <button id="changeLanguage_ES" class="btn btn-primary w-20 mx-1 align-self-center" onclick="i18next.changeLanguage('es')">Español</button>
                              <button id="changeLanguage_FR" class="btn btn-primary w-20 mx-1 align-self-center" onclick="i18next.changeLanguage('fr')">Français</button>
                              <button id="changeLanguage_PT" class="btn btn-primary w-20 mx-1 align-self-center" onclick="i18next.changeLanguage('pt')">Português</button>
                              <button id="changeLanguage_DE" class="btn btn-primary w-20 mx-1 align-self-center" onclick="i18next.changeLanguage('de')">Deutsche</button>
                            </div>
                        </div>
                    </div>
                </section>

                 <section class="py-3">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="" id="KEY_CONFIGURATION_Theme_title">Color </h1>
                                <h2 class="text-muted" id="KEY_CONFIGURATION_Theme_subtitle">Seleccionar opcion </h2>
                            </div>
                            <div class="col-lg-3 d-flex justify-content-around p-2">
                                <button id="changeThemeColorBlue" class="btn btn-primary w-20 align-self-center">Azul</button>
                                <button id="changeThemeColorViolet" class="btn btn-primary w-50 align-self-center">Violeta</button>
                            
                            </div>
                        </div>
                    </div>
                </section>

`;