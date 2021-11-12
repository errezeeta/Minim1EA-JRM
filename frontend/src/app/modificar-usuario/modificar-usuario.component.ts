import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';

//El componente modificar realizará el UPDATE y DELETE de los elementos GRUPO
@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  usuario: Usuario;
  id: String;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuario(this.id).subscribe(data =>{
      this.usuario = data;
      this.usuarioForm = this.formBuilder.group({
        id: [this.usuario.id, [Validators.required, Validators.nullValidator]],
        username: [this.usuario.username, [Validators.required, Validators.nullValidator]],
        password: [this.usuario.password, [Validators.required, Validators.nullValidator]],
        email: [this.usuario.email, [Validators.required, Validators.nullValidator]],
        vacunas: []
      });
    })
  }

  get formControls(){
    return this.usuarioForm.controls;
  }
  //Si se clika el boton atrs
  atras(){
    console.log("Hello");

    this.router.navigateByUrl('/principal');
  }

  //Funcion de UPDATE si se clika al boton modificar
  modificarUsuario(){
    if(this.usuarioForm.invalid){
      return;
    }
    const id = this.usuarioForm.value.id;
    const username = this.usuarioForm.value.username;
    const password = this.usuarioForm.value.password;
    const email = this.usuarioForm.value.email;
    const vacunas = this.usuarioForm.value.vacunas;

    const usuariomodificado = {'id': id, 'username': username, 'password': password, 'email': email,'vacunas':vacunas};
    this.usuarioService.modificarUsuario(usuariomodificado, this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.router.navigateByUrl('/principal');
    })
  }


  //Funcion de DELETE si se clika el boton eliminar
  deleteUsuario(){
    const id = this.usuarioForm.value.id;
    console.log(id);
    this.usuarioService.eliminarUsuario(id).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    });
  }

}
