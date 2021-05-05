class Router {
    constructor(app) {
        this.app = app;
    }

    route(path) {
        switch (path) {

            // caso inicial
            case "":
                this.app.tablero();
                break;

            case "tablero":
                this.app.tablero();
                break;

            case "presupuesto":
                this.app.presupuesto();
                break;

            case "gastos":
                this.app.gastos();
                break;

            case "ingresos":
                this.app.ingresos();
                break;

            case "estadisticas":
                this.app.estadisticas();
                break;

            case "cotizaciones":
                this.app.cotizaciones();
                break;

            case "reportes":
                this.app.reportes();
                break;

            case "configuracion":
                this.app.configuracion();
                break;

            case "cerrarSesion":
                this.app.cerrarSesion();
                break;

            case "datos":
                this.app.datos();
                break;

            default:
                this.app.error();
                break;
        }
    }
};