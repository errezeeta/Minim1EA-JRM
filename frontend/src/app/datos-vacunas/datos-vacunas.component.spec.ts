import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosVacunasComponent } from './datos-vacunas.component';

describe('DatosVacunasComponent', () => {
  let component: DatosVacunasComponent;
  let fixture: ComponentFixture<DatosVacunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosVacunasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosVacunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
