import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CreateEmpleadoInterface, EmpleadoInterface} from '../../../utils';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-empleado-formulario',
  templateUrl: './empleado-formulario.component.html',
  styleUrls: ['./empleado-formulario.component.scss'],
})
export class EmpleadoFormularioComponent implements OnInit {

  empleadoFormulario: FormGroup = new FormGroup({});
  @Output() emitEmpleado: EventEmitter<EmpleadoInterface> = new EventEmitter();
  @Input() empleadoAEditar?: EmpleadoInterface;

  constructor(
    private readonly _formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.contruirFormulario();
  }

  private contruirFormulario() {
    this.empleadoFormulario = this._formBuilder.group({
      nombres: [this.empleadoAEditar?.nombres ?? '', [Validators.required]],
      apellidos: [this.empleadoAEditar?.apellidos ?? '', [Validators.required]],
      cedula: [this.empleadoAEditar?.cedula ?? '', [Validators.required]],
      correoElectronico: [this.empleadoAEditar?.correoElectronico ?? '', [Validators.required]],
      fechaNacimiento: [this.empleadoAEditar?.fechaNacimiento ?? ''],
      telefonoMovil: [this.empleadoAEditar?.telefonoMovil ?? ''],
      vacunado: [this.empleadoAEditar?.vacunado ?? ''],
      // DIRECCIONES
      direcciones: new FormArray(this.empleadoAEditar
        ?.direcciones
        ?.map(i => (new FormGroup({
          provincia: new FormControl(i.provincia, Validators.required),
          ciudad: new FormControl(i.ciudad, Validators.required),
          callePrincipal: new FormControl(i.callePrincipal, Validators.required),
          calleSecundaria: new FormControl(i.calleSecundaria),
          id: new FormControl(i.id),
        }))) ?? []),
      // DIRECCIONES
      vacunas: new FormArray(this.empleadoAEditar
        ?.vacunas
        ?.map(i => (new FormGroup({
          tipoVacuna: new FormControl(i.tipoVacuna, Validators.required),
          fechaVacunacion: new FormControl(i.fechaVacunacion, Validators.required),
          numeroDosis: new FormControl(i.numeroDosis, Validators.required),
          id: new FormControl(i.id),
        }))) ?? []),
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
      this.emitEmpleado.emit({...this.empleadoAEditar, ...this.empleadoFormulario.value});
    } else {
      this.empleadoFormulario.markAllAsTouched();
    }
  }
}
