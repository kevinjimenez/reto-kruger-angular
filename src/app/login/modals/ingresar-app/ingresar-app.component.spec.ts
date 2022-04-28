import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarAppComponent } from './ingresar-app.component';

describe('IngresarAppComponent', () => {
  let component: IngresarAppComponent;
  let fixture: ComponentFixture<IngresarAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
