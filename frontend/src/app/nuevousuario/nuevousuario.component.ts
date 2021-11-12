import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
//Componente dedicado a crear un nuevo usuario, se accede a este desde el bootn de crear usuario en el componente PRINCIPAL
export class NuevousuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.nullValidator]],
      username: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]],
      email: ['', [Validators.required, Validators.nullValidator]],
      vacunas: ['']
    });
  }

  get formControls(){
    return this.usuarioForm.controls;
  }

  addusuario(): void{
    if(this.usuarioForm.invalid){
      return;
    }
    const id = this.usuarioForm.value.id;
    const username = this.usuarioForm.value.username;
    const password = this.usuarioForm.value.password;
    const email = this.usuarioForm.value.email;
    const vacunas = null;

    console.log(email);

    //Automaticamente despues de crear el usuario, volvera al componente principal
    const usuario = {'id': id, 'username': username, 'password': password, 'email': email,'vacunas':vacunas};
    this.usuarioService.addUsuario(usuario).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }
  //Por si finalmente no se crea ningun nuevo usuario y se clica el boton 
  atras(){
    this.router.navigateByUrl('/principal');
  }

}
