import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredencialesFormularioComponent } from './credenciales-formulario.component';

describe('CredencialesFormularioComponent', () => {
  let component: CredencialesFormularioComponent;
  let fixture: ComponentFixture<CredencialesFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredencialesFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredencialesFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
