import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/Usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  //Ruta para obtener todos los usuarios
  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(environment.apiURL + "/usuarios");
  }

  //Ruta para obtener un usuario 
  getUsuario(id: String): Observable<Usuario>{
    return this.http.get<Usuario>(environment.apiURL + "/usuarios/" + id);
  }

  //Para añadir un usuario
  addUsuario(nuevousuario: Usuario): Observable<any>{
    return this.http.post(environment.apiURL + '/usuarios/new', nuevousuario);
  }

  //Para modificar un usuario
  modificarUsuario(usuariomodificado: Usuario, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/usuarios/update/" + id, usuariomodificado);
  }

  //Para eliminar un usuario
  eliminarUsuario(id: String): Observable<any>{
    return this.http.delete<Usuario>(environment.apiURL + "/usuarios/"+ id);
  }
}
