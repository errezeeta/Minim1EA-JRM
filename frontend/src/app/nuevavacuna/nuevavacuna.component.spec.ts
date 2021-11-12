import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevavacunaComponent } from './nuevavacuna.component';

describe('NuevavacunaComponent', () => {
  let component: NuevavacunaComponent;
  let fixture: ComponentFixture<NuevavacunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevavacunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevavacunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
