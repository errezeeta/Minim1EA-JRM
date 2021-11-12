import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GrupoInvestigacion } from '../models/grupoinvestigacion'

@Injectable({
  providedIn: 'root'
})
export class GrupoinvestigacionService {

  constructor(private http: HttpClient) { }

  //ruta para obtener grupos
  getGrupos(): Observable<GrupoInvestigacion[]>{
    return this.http.get<GrupoInvestigacion[]>(environment.apiURL + "/gruposinvestigacion");
  }

  //ruta para obtener un grupo
  getGrupo(id: String): Observable<GrupoInvestigacion>{
    return this.http.get<GrupoInvestigacion>(environment.apiURL + "/gruposinvestigacion/" + id);
  }

  //rpara crear un grupo
  addGrupo(nuevogrupo: GrupoInvestigacion): Observable<any>{
    return this.http.post(environment.apiURL + '/gruposinvestigacion/new', nuevogrupo);
  }

  //para modificar un grupo
  modificarGrupo(grupomodificado: GrupoInvestigacion, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/gruposinvestigacion/update/" + id, grupomodificado);
  }

  //para eliminar un grupo
  eliminarGrupo(id: String): Observable<any>{
    return this.http.delete<GrupoInvestigacion>(environment.apiURL + "/gruposinvestigacion/"+ id);
    //return this.http.delete(this.apiURL+'/delete'+`/${id}`);
  }
}
