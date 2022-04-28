import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUsuarioContraseniaComponent } from './crear-usuario-contrasenia.component';

describe('CrearUsuarioContraseniaComponent', () => {
  let component: CrearUsuarioContraseniaComponent;
  let fixture: ComponentFixture<CrearUsuarioContraseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUsuarioContraseniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUsuarioContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
