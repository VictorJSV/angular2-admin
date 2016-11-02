import { Routes, RouterModule } from '@angular/router'

import { AdminComponent } from './pages/admin.component';
import { CallCenterComponent } from './pages/callCenter.component';

//Las rutas sin slash
const appRoutes: Routes = [
  { path: '' , component: AdminComponent},
  { path: 'call-center' , component: CallCenterComponent},
  { path: '**', component: AdminComponent}
]
// Cuando estemos importando los proveedores dentro de nuestro modulo
export const appRoutingProviders : any[] = [];
// Para exportar todas nuestras rutas
export const routing = RouterModule.forRoot(appRoutes);