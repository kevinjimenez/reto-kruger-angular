import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EmpleadoInterface, Vacunas} from '../../../utils';
import {FormControl, FormGroup} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {debounceTime} from 'rxjs';
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
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class BarraBusquedaComponent implements OnInit {


  filtros: FormGroup = new FormGroup({
    tipoVacuna: new FormControl(),
    vacunado: new FormControl(),
    fechas: new FormGroup({
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
    }),
  });
  tipoVacunas = Vacunas;
  esVacunado = [
    {
      label: 'Vacunado',
      value: true,
    },
    {
      label: 'No vacunado',
      value: false,
    }
  ];
  @Output() emitEmpleados: EventEmitter<EmpleadoInterface[]> = new EventEmitter<EmpleadoInterface[]>();


  constructor(
    private readonly _empleadoService: EmpleadoService,
  ) {
    this.filtros
      .valueChanges
      .pipe(
        debounceTime(250),
      )
      .subscribe(
        {
          next: v => {
            const {vacunado, tipoVacuna, fechas} = this.filtros.value;
            let {fechaInicio, fechaFin} = fechas;
            // moment(this.empleadoFormulario.value.fechaNacimiento).format('YYYY-MM-DD')

            fechaInicio = fechaInicio ? moment(fechaInicio).format('YYYY-MM-DD') : undefined;
            fechaFin = fechaFin ? moment(fechaFin).format('YYYY-MM-DD') : undefined;

            this._empleadoService.findAllWithCriteria(
              undefined,
              undefined,
              tipoVacuna || undefined,
              vacunado,
              fechaInicio || undefined,
              fechaFin || undefined,
            )
              .subscribe({
                next: empleados => {
                  console.log('a', empleados);
                  this.emitEmpleados.emit(empleados);
                },
              });
          },
        },
      );

  }

  ngOnInit(): void {

  }

}
