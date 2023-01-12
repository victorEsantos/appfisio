import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPacientesCompComponent } from './cadastrar-pacientes-comp.component';

describe('CadastrarPacientesCompComponent', () => {
  let component: CadastrarPacientesCompComponent;
  let fixture: ComponentFixture<CadastrarPacientesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarPacientesCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarPacientesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
