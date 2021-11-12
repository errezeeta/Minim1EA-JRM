import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vacuna } from '../models/vacuna'

@Injectable({
  providedIn: 'root'
})
export class VacunaService {

  constructor(private http: HttpClient) { }

  //Ruta para obtener todas las vacunas
  getVacunas(): Observable<Vacuna[]>{
    return this.http.get<Vacuna[]>(environment.apiURL + "/vacunas"); //El mismo URL que en el backend!!
  }

  //Ruta para obtener una vacuna 
  getVacuna(id: String): Observable<Vacuna>{
    return this.http.get<Vacuna>(environment.apiURL + "/vacunas/" + id);
  }

  
  addVacuna(nuevavacuna: Vacuna): Observable<any>{
    return this.http.post(environment.apiURL + '/vacunas/new', nuevavacuna);
  }


  modificarVacuna(vacunamodificada: Vacuna, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/vacunas/update/" + id, vacunamodificada);
  }


  eliminarVacuna(id: String): Observable<any>{
    return this.http.delete<Vacuna>(environment.apiURL + "/vacunas/"+ id);
  }
}