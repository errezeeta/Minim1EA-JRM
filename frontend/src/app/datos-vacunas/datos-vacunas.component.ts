import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vacuna } from '../models/vacuna';

@Component({
  selector: 'app-datos-vacunas',
  templateUrl: './datos-vacunas.component.html',
  styleUrls: ['./datos-vacunas.component.css']
})
export class DatosVacunasComponent implements OnInit {

  @Input()
  vacuna: Vacuna;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  modificar(){
    this.router.navigate(['/' + this.vacuna.id]);
  }

}
