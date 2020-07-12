"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ProductosService = /** @class */ (function () {
    function ProductosService(http) {
        this.http = http;
        this.productos = [];
        this.url = "http://localhost/services/";
    }
    ProductosService.prototype.getProducto = function (prod_id) {
        console.log("productos.service.ts: " + prod_id);
        return this.http.post(this.url + "buscar.php", JSON.stringify(prod_id));
    };
    ProductosService.prototype.cargarProductos = function () {
        return this.http.get(this.url + "cargar_catalogo.php");
    };
    ProductosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductosService);
    return ProductosService;
}());
exports.ProductosService = ProductosService;
