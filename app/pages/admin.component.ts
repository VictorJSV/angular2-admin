import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AdminService } from '../services/admin.service';
declare var $:any;

@Component({
  templateUrl: 'app/pages/admin.template.html',
  providers: [AdminService]
})
export class AdminComponent implements OnInit {
  admins:Array<Object>;

  constructor( private adminService: AdminService ){ }

  listaAdmin(){
      this.adminService.adminList()
          .then(admins => this.admins = admins);    
  }

  enviarFormulario(formulario: NgForm){
    console.log(formulario);
    /*this.adminService.sendNewAdmin({
      nombre: this.formulario.nombre,
      email: this.formulario.email,
      empresa: this.formulario.empresa
    });*/
  }

  ngOnInit() {
      this.listaAdmin();
      $('.modal-trigger').leanModal();
  }

}