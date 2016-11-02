"use strict";
var router_1 = require('@angular/router');
var admin_component_1 = require('./pages/admin.component');
var callCenter_component_1 = require('./pages/callCenter.component');
//Las rutas sin slash
var appRoutes = [
    { path: '', component: admin_component_1.AdminComponent },
    { path: 'call-center', component: callCenter_component_1.CallCenterComponent },
    { path: '**', component: admin_component_1.AdminComponent }
];
// Cuando estemos importando los proveedores dentro de nuestro modulo
exports.appRoutingProviders = [];
// Para exportar todas nuestras rutas
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map