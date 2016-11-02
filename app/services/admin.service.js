"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
//Le digo a Angular para inyectar esta clase.
//Necesitamos utulizarlo para evitar un error
var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.adminList = function () {
        return this.http.get('https://crackling-torch-81.firebaseio.com/data.json')
            .toPromise()
            .then(function (respuesta) { return respuesta.json(); })
            .catch(this.handlerError);
    };
    AdminService.prototype.adminInformation = function (id) {
        var url = "https://jsonplaceholder.typicode.com/users/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (respuesta) { return respuesta.json(); })
            .catch(this.handlerError);
    };
    AdminService.prototype.sendNewAdmin = function (admin) {
        var info = JSON.stringify(admin);
        return this.http.post('https://crackling-torch-81.firebaseio.com/data.json', info)
            .toPromise()
            .then(function (respuesta) { return console.log(respuesta); })
            .catch(this.handlerError);
    };
    AdminService.prototype.handlerError = function (error) {
        console.log('Ocurrio un error con el llamado HTTP.');
        return Promise.reject(error.message || error);
    };
    AdminService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map