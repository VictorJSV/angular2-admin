import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

import { routing, appRoutingProviders } from './app.routing';
import { AdminService } from './services/admin.service'

import { AdminComponent } from './pages/admin.component';
import { CallCenterComponent } from './pages/callCenter.component';
import { MenuComponent } from './partials/menu/menu.component';

import { AppComponent }   from './app.component';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule ], // Es para usarlo en nuestra aplicación
  declarations: [ AppComponent, AdminComponent, CallCenterComponent, MenuComponent ], //Todos los componentes que usamos en nuestra aplicación
  bootstrap:    [ AppComponent ], //Que utilize el AppComponent para inicializar la aplicación
  providers:    [ appRoutingProviders, AdminService ]
})
export class AppModule { }
