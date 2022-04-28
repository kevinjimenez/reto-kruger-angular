import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmpleadoInterface, VacunaInterface, Vacunas, ValidacionFormulario} from '../../../utils';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import * as moment from 'moment';
import {EmpleadoService} from '../../../core';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-empleado-formulario',
  templateUrl: './empleado-formulario.component.html',
  styleUrls: ['./empleado-formulario.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class EmpleadoFormularioComponent implements OnInit {

  empleadoFormulario: FormGroup = new FormGroup({});
  @Output() emitEmpleado: EventEmitter<EmpleadoInterface> = new EventEmitter();
  @Input() empleadoAEditar?: EmpleadoInterface;
  tipoVacunas = Vacunas;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _empleadoService: EmpleadoService,
  ) {

  }

  ngOnInit(): void {
    this.contruirFormulario();
  }

  private contruirFormulario() {
    this.empleadoFormulario = this._formBuilder.group({
      nombres: [this.empleadoAEditar?.nombres ?? '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]],
      apellidos: [this.empleadoAEditar?.apellidos ?? '', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]],
      cedula: [this.empleadoAEditar?.cedula ?? '', [
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
        Validators.minLength(10),
        Validators.maxLength(10),
      ], this.empleadoAEditar ? [] : [ValidacionFormulario.existeEmpleadoConCedula(this._empleadoService)]],
      correoElectronico: [this.empleadoAEditar?.correoElectronico ?? '', [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
      ], this.empleadoAEditar ? [] : [ValidacionFormulario.existeEmpleadoConCorreoElectronico(this._empleadoService)]],
      fechaNacimiento: [this.empleadoAEditar?.fechaNacimiento ?? ''],
      telefonoMovil: [this.empleadoAEditar?.telefonoMovil ?? '', [
        Validators.minLength(7),
        Validators.maxLength(10),
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]],
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

  get esCampoCorreoElectronicoInvalido() {
    return this.campoCorreoElectronico?.touched && this.campoCorreoElectronico.invalid;
  }

  get campoTelefonoMovil() {
    return this.empleadoFormulario.get('telefonoMovil');
  }

  get esCampoTelefonoMovilInvalido() {
    return this.campoTelefonoMovil?.touched && this.campoTelefonoMovil.invalid;
  }

  get campoFechaNacimiento() {
    return this.empleadoFormulario.get('fechaNacimiento');
  }

  get esCampoFechaNacimientoInvalido() {
    return this.campoFechaNacimiento?.touched && this.campoFechaNacimiento.invalid;
  }


  //* Formulario para agregar vacunas
  formularioVacuna() {
    return new FormGroup({
      tipoVacuna: new FormControl('', Validators.required),
      fechaVacunacion: new FormControl('', Validators.required),
      numeroDosis: new FormControl('', Validators.required),
    });
  }

  campoTipoVacuna(i: number) {
    return this.campoVacunas.at(i).get('tipoVacuna');
  }

  esCampoTipoVacunaInvalido(i: number) {
    return this.campoVacunas.at(i).get('tipoVacuna')?.touched && this.campoVacunas.at(i).get('tipoVacuna')?.invalid;
  }

  campoFechaVacunacion(i: number) {
    return this.campoVacunas.at(i).get('fechaVacunacion');
  }

  esCampoFechaVacunacionInvalido(i: number) {
    return this.campoVacunas.at(i).get('fechaVacunacion')?.touched && this.campoVacunas.at(i).get('fechaVacunacion')?.invalid;
  }

  campoNumeroDosis(i: number) {
    return this.campoVacunas.at(i).get('numeroDosis');
  }

  esCampoNumeroDosisInvalido(i: number) {
    return this.campoVacunas.at(i).get('numeroDosis')?.touched && this.campoVacunas.at(i).get('numeroDosis')?.invalid;
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

  //* Formulario para agregar direcciones
  formularioDireccion() {
    return new FormGroup({
      provincia: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      callePrincipal: new FormControl('', Validators.required),
      calleSecundaria: new FormControl(''),
    });
  }

  campoProvincia(i: number) {
    return this.campoDirecciones.at(i).get('provincia');
  }

  esCampoProvinciaInvalido(i: number) {
    return this.campoDirecciones.at(i).get('provincia')?.touched && this.campoDirecciones.at(i).get('provincia')?.invalid;
  }

  campoCiudad(i: number) {
    return this.campoDirecciones.at(i).get('ciudad');
  }

  esCampoCiudadInvalido(i: number) {
    return this.campoDirecciones.at(i).get('ciudad')?.touched && this.campoDirecciones.at(i).get('ciudad')?.invalid;
  }

  campoCallePrincipal(i: number) {
    return this.campoDirecciones.at(i).get('callePrincipal');
  }

  esCampoCallePrincipalInvalido(i: number) {
    return this.campoDirecciones.at(i).get('callePrincipal')?.touched && this.campoDirecciones.at(i).get('callePrincipal')?.invalid;
  }

  get campoDirecciones(): FormArray {
    return this.empleadoFormulario.get('direcciones') as FormArray;
  }

  agregarDireccion() {
    this.campoDirecciones.push(this.formularioDireccion());
  }

  eliminarDireccion(index: number) {
    this.campoDirecciones.removeAt(index);
  }

  guardarEmpleado(_: HTMLFormElement) {
    if (this.empleadoFormulario.valid) {
      this.empleadoFormulario.value.fechaNacimiento =
        this.empleadoFormulario.value.fechaNacimiento ?
          moment(this.empleadoFormulario.value.fechaNacimiento).format('YYYY-MM-DD') :
          null;
      let {vacunas} = this.empleadoFormulario.value;
      vacunas = vacunas.map((i: any) => ({
        ...i,
        fechaVacunacion: moment(i.fechaVacunacion).format('YYYY-MM-DD'),
      }));
      this.empleadoFormulario.value.vacunas = vacunas;
      this.emitEmpleado.emit({...this.empleadoAEditar, ...this.empleadoFormulario.value});
    } else {
      this.empleadoFormulario.markAllAsTouched();
    }
  }

  escuchaDatePickerFechaNacimiento() {
    this.empleadoFormulario.value.fechaNacimiento = moment(this.empleadoFormulario.value.fechaNacimiento).format('YYYY-MM-DD');
  }
}
