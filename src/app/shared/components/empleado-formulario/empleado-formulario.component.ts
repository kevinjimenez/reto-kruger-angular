import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CreateEmpleadoInterface} from '../../../utils';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-empleado-formulario',
  templateUrl: './empleado-formulario.component.html',
  styleUrls: ['./empleado-formulario.component.scss'],
})
export class EmpleadoFormularioComponent implements OnInit {

  empleadoFormulario: FormGroup = new FormGroup({});
  @Output() emitEmpleado: EventEmitter<CreateEmpleadoInterface> = new EventEmitter();

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {
    this.contruirFormulario();
  }

  ngOnInit(): void {
  }

  private contruirFormulario() {
    this.empleadoFormulario = this._formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      correoElectronico: ['', [Validators.required]],
      fechaNacimiento: [''],
      telefonoMovil: [''],
      vacunado: [false],
      direcciones: new FormArray([]),
      vacunas: new FormArray([]),
    });
  }

  get campoNombres() {
    return this.empleadoFormulario.get('nombres');
  }

  get esCampoNombresInvalido() {
    return this.campoNombres?.touched && this.campoNombres.invalid;
  }

  get campoApellidos() {
    return this.empleadoFormulario.get('apellidos');
  }

  get esCampoApellidosInvalido() {
    return this.campoApellidos?.touched && this.campoApellidos.invalid;
  }

  get campoCedula() {
    return this.empleadoFormulario.get('cedula');
  }

  get esCampoCedulaInvalido() {
    return this.campoCedula?.touched && this.campoCedula.invalid;
  }

  get campoCorreoElectronico() {
    return this.empleadoFormulario.get('correoElectronico');
  }

  eliminarDireccion(index: number) {
    this.campoDirecciones.removeAt(index);
  }

  //? Formulario para agregar vacunas
  formularioVacuna() {
    return new FormGroup({
      tipoVacuna: new FormControl('', Validators.required),
      fechaVacunacion: new FormControl('', Validators.required),
      numeroDosis: new FormControl('', Validators.required),
    });
  }

  get campoVacunas(): FormArray {
    return this.empleadoFormulario.get('vacunas') as FormArray;
  }

  agregarVacuna() {
    this.campoVacunas.push(this.formularioVacuna());
  }

  eliminarVacuna(index: number) {
    this.campoVacunas.removeAt(index);
  }


  formularioDireccion() {
    return new FormGroup({
      provincia: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      callePrincipal: new FormControl('', Validators.required),
      calleSecundaria: new FormControl(''),
    });
  }

  get campoDirecciones(): FormArray {
    return this.empleadoFormulario.get('direcciones') as FormArray;
  }

  agregarDireccion() {
    this.campoDirecciones.push(this.formularioDireccion());
  }

  get esCampoCorreoElectronicoInvalido() {
    return this.campoCorreoElectronico?.touched && this.campoCorreoElectronico.invalid;
  }

  guardarEmpleado(_: HTMLFormElement) {
    if (this.empleadoFormulario.valid) {
      console.log(this.empleadoFormulario.value);
      const payload = this.limpiarValoresNullsJson<CreateEmpleadoInterface>(this.empleadoFormulario.value) as CreateEmpleadoInterface;
      console.log(payload);
      // payload.login = 18;
      // this.emitEmpleado.emit(payload as CreateEmpleadoInterface);
    } else {
      this.empleadoFormulario.markAllAsTouched();
    }
  }

  limpiarValoresNullsJson<T>(json: T | {}) {
    let jsonN = {};
    for (const key of Object.keys(json)) {
      // @ts-ignore
      if (json[key]) {
        jsonN = {
          // @ts-ignore
          [key]: json[key],
          ...jsonN,
        };
      }
    }
    return jsonN;
  }

}
