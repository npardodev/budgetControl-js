/* Diccionarios por secciones */
const mainsTemplateKeys = [
    "KEY_Main_Title",
    "KEY_Main_Gastos_acum",
    "KEY_Main_Ingresos_acum",
    "KEY_Main_Presp_disp"
];

const tableroTemplateKeys = [
    "KEY_BOARD_Cant_Operac_Title",
    "KEY_BOARD_Cant_Operac_Subtitle_income",
    "KEY_BOARD_Cant_Operac_Subtitle_expenses",
    "KEY_BOARD_SubsTitle",
];

const budgetTemplateKeys = [
    "KEY_BUDGET_Name_Title",
    "KEY_BUDGET_Date_Title",
    "KEY_BUDGET_Index_Title",
    "KEY_BUDGET_Clean_Title",
    "KEY_BUDGET_Empty_Title",
];

const statisticsTemplateKeys = [
    "KEY_STATISTICS_Quant_Expenses_Graph_Title",
    "KEY_STATISTICS_Quant_Income_Graph_Title",
    "KEY_STATISTICS_Percentages_Expenses_Graph_Title",
    "KEY_STATISTICS_Percentages_Income_Graph_Title",
    "KEY_STATISTICS_Price_Expenses_Graph_Title",
    "KEY_STATISTICS_Price_Income_Graph_Title"
];

const moneysTemplateKeys = [
    "KEY_MONEYS_Main_Title",
    "KEY_MONEYS_Dolar_Title",
    "KEY_MONEYS_Real_Title",
    "KEY_MONEYS_Euro_Title",
    "KEY_MONEYS_Last_act_Title",
    "KEY_MONEYS_sold_Subtitle",
    "KEY_MONEYS_buy_Subtitle",
    "KEY_MONEYS_variation_Subtitle"
];

const reportsTemplateKeys = [
    "KEY_REPORTS_Main_title",
    "KEY_REPORTS_Main_Subtitle",
    "KEY_REPORTS_Download_report_title",
];

const dataTemplateKeys = [
    "KEY_DATA_Cat_title",
    "KEY_DATA_Cat_Edit_subtitle",
    "KEY_DATA_Cat_add_subtitle",
    "KEY_DATA_Payments_title",
    "KEY_DATA_Payments_Edit_subtitle",
    "KEY_DATA_Payments_add_subtitle",
    "KEY_DATA_Cards_title",
    "KEY_DATA_Cards_Edit_subtitle",
    "KEY_DATA_Cards_add_subtitle",
    "KEY_DATA_Banks_title",
    "KEY_DATA_Banks_Edit_subtitle",
    "KEY_DATA_Banks_add_subtitle",
];

const configurationTemplateKeys = [
    "KEY_CONFIGURATION_Languaje_title",
    "KEY_CONFIGURATION_Languaje_subtitle",
    "KEY_CONFIGURATION_Theme_title",
    "KEY_CONFIGURATION_Theme_subtitle",
];

const incomeTemplateKeys = [
    "KEY_INCOME_Main_title",
    "KEY_INCOME_Add_item_subtitle",
    "KEY_INCOME_Add_value_subtitle",
    "KEY_INCOME_Add_cat_subtitle",
    "KEY_INCOME_Add_payment_subtitle",
    "KEY_INCOME_Add_descrip_subtitle",
    "KEY_INCOME_Add_save_subtitle",
    "KEY_INCOME_Graph_Title",
    "KEY_INCOME_LastList_Title",
    "KEY_INCOME_CompleteList_Title",
];

const expensesTemplateKeys = [
    "KEY_EXPENSES_Main_title",
    "KEY_EXPENSES_Add_item_subtitle",
    "KEY_EXPENSES_Add_value_subtitle",
    "KEY_EXPENSES_Add_cat_subtitle",
    "KEY_EXPENSES_Add_payment_subtitle",
    "KEY_EXPENSES_Add_descrip_subtitle",
    "KEY_EXPENSES_Add_save_subtitle",
    "KEY_EXPENSES_Graph_Title",
    "KEY_EXPENSES_LastList_Title",
    "KEY_EXPENSES_CompleteList_Title",
];

const errorTemplateKeys = [
    "KEY_ERROR_Title"
];



function servicioTraduccion(idioma) {

    i18next.init({
        lng: idioma,
        debug: true,
        resources: {
            en: {
                translation: translationEN,
            },
            es: {
                translation: translationES,
            },
            pt: {
                translation: translationPT,
            },
            de: {
                translation: translationDE,
            },
            fr: {
                translation: translationFR,
            }
        }
    }, function(err, t) {
        updateContent();
    });

    i18next.on('languageChanged', () => {
        updateContent();
        uploadTranslateSeccion();
    });
}



function changeLng(lng) {
    i18next.changeLanguage(lng);
}


function translateTemplate(tableroKeys) {

    for (let i = 0; i < tableroKeys.length; i++) {
        let key = tableroKeys[i];
        $('#' + key).html(i18next.t(key)).hide().delay(0).fadeIn(800);
    }
}

function updateContent() {

    // navlinks
    element = $('[id^="NAV_LINK_"]');

    for (let i = 0; i < element.length; i++) {
        navlink = element.get(i).id;
        $("#" + navlink).html(i18next.t('KEY_' + navlink)).hide().delay(0).fadeIn(800);
    }
    // Panel superior
    translateTemplate(mainsTemplateKeys);
}




function uploadTranslateSeccion() {

    // Secciones
    let seccion = location.hash.split('/')[1].toUpperCase();

    switch (seccion) {

        case "TABLERO":
            translateTemplate(tableroTemplateKeys);
            break;

        case "PRESUPUESTO":
            translateTemplate(budgetTemplateKeys);
            break;

        case "INGRESOS":
            translateTemplate(incomeTemplateKeys);
            break;

        case "GASTOS":
            translateTemplate(expensesTemplateKeys);
            break;

        case "ESTADISTICAS":
            translateTemplate(statisticsTemplateKeys);
            break;

        case "COTIZACIONES":
            translateTemplate(moneysTemplateKeys);
            break;

        case "REPORTES":
            translateTemplate(reportsTemplateKeys);
            break;

        case "CONFIGURACION":
            translateTemplate(configurationTemplateKeys);
            break;

        case "DATOS":
            translateTemplate(dataTemplateKeys);

        case "ERROR":
            translateTemplate(errorTemplateKeys);
            break;

        default:
            translateTemplate(errorTemplateKeys);
    }


}