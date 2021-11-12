import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { GrupoinvestigacionService } from '../services/grupoinvestigacion.service';
import { UsuarioService } from '../services/usuario.service';
import { GrupoInvestigacion } from '../models/grupoinvestigacion';

//El componente principal es el que realiza el GET (all)
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  grupos: GrupoInvestigacion[];
  usuarios : Usuario[];

  constructor(private router: Router, private grupoService : GrupoinvestigacionService, private usuarioService : UsuarioService) { }

  ngOnInit(): void {

    this.usuarioService.getUsuarios().subscribe(data =>{
      this.usuarios = data;
      console.log(this.usuarios);
    })
  }
  
  //Si se decide crear un nuevo grupo manda al componente nuevogrupo
  nuevoGrupo(){
    this.router.navigateByUrl('/nuevogrupo');
  }
  //Si se decide crear un nuevo usuario manda al componente nuevousuairo
  nuevoUsuario(){
    this.router.navigateByUrl('/nuevousuario');
  }

  nuevavacuna(){
    this.router.navigateByUrl('/nuevavacuna');
  }
}
