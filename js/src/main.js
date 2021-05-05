let app, router;

const USER_DEFAULT = "User";
const USER_LANGUAJE_DEFAULT = "es";

let userName = USER_DEFAULT;
let userLenguaje = USER_LANGUAJE_DEFAULT;

$(() => {
    app = new PresupuestoController(new PresupuestoModel(), new PresupuestoView());
    router = new Router(app);
    router.route("")
});

$(window).on('hashchange', function() {
    const nuevoPath = location.hash.split('/')[1];
    router.route(nuevoPath);
});


$(window).on('load', function() {
    //El Dom está listo para el uso

    readUserProfile();

    loadUserProfile();

    swal("Bienvenido.");
});


$(document).ready(function() {
    //El Dom se cargó correctamente.

    // Cargo el gif de carga
    setTimeout(function() {
        $('#loadtitle').fadeOut(800);
        $('#load').fadeOut(800);
    }, 1500);

});


function readUserData() {

    const userRead = sessionStorage.getItem("user");

    if (userRead != null)
        userName = userRead;
}

function readUserConfig() {

    const configRead = sessionStorage.getItem("config");

    if (userRead != null)
        app.config = configRead;
}

function readUserLanguaje() {

    const lang = sessionStorage.getItem("lng");

    if (lang != null)
        userLenguaje = lang;
}


function readUserProfile() {
    readUserData();
    readUserLanguaje();
}


function loadUserProfile() {

    $('#user').text((userName));
    servicioTraduccion(userLenguaje);
}