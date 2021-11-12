import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VacunaService } from '../services/vacuna.service';

@Component({
  selector: 'app-nuevavacuna',
  templateUrl: './nuevavacuna.component.html',
  styleUrls: ['./nuevavacuna.component.css']
})
//Componente dedicado a crear un nuevo usuario, se accede a este desde el bootn de crear usuario en el componente PRINCIPAL
export class NuevavacunaComponent implements OnInit {

  vacunaForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private vacunaService: VacunaService, private router: Router) { }

  ngOnInit(): void {
    this.vacunaForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.nullValidator]],
      nombre: ['', [Validators.required, Validators.nullValidator]],
      descripcion: ['', [Validators.required, Validators.nullValidator]],
      tecnologia: ['', [Validators.required, Validators.nullValidator]],
      fechaAceptacion: ['', [Validators.required, Validators.nullValidator]],
    });
  }

  get formControls(){
    return this.vacunaForm.controls;
  }

  addvacuna(): void{
    if(this.vacunaForm.invalid){
      return;
    }
    const id = this.vacunaForm.value.id;
    const nombre = this.vacunaForm.value.nombre;
    const descripcion = this.vacunaForm.value.descripcion;
    const tecnologia = this.vacunaForm.value.tecnologia;
    const fechaAceptacion = this.vacunaForm.value.fechaAceptacion;

    console.log(nombre);

    //Automaticamente despues de crear la vacuna, volvera al componente principal
    const vacuna = {'id': id, 'nombre': nombre, 'descripcion': descripcion, 'tecnologia': tecnologia, "fechaAceptacion":fechaAceptacion};
    this.vacunaService.addVacuna(vacuna).subscribe(data =>{
      this.router.navigateByUrl('/principal');
    })
  }
  //Por si finalmente no se crea ningun nuevo usuario y se clica el boton ATRAS 
  atras(){
    this.router.navigateByUrl('/principal');
  }

}
