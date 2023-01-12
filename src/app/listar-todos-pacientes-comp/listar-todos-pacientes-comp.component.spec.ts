import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTodosPacientesCompComponent } from './listar-todos-pacientes-comp.component';

describe('ListarTodosPacientesCompComponent', () => {
  let component: ListarTodosPacientesCompComponent;
  let fixture: ComponentFixture<ListarTodosPacientesCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTodosPacientesCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTodosPacientesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
