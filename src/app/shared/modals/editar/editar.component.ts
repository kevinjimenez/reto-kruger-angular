import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EmpleadoInterface, UpdateEmpleadoInterface} from '../../../utils';
import {DireccionService, EmpleadoService, VacunaService} from '../../../core';
import {mergeMap} from 'rxjs';
import {EmpleadoFormularioComponent} from '../../components/empleado-formulario/empleado-formulario.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
})
export class EditarComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: EmpleadoInterface,
    public dialogRef: MatDialogRef<EmpleadoFormularioComponent>,
    private readonly _empleadoService: EmpleadoService,
    private readonly _direccionService: DireccionService,
    private readonly _vacunaService: VacunaService,
  ) {
  }

  ngOnInit(): void {

  }

  editarEmpeado(empleado: UpdateEmpleadoInterface) {
    const {id} = empleado;
    let empleadoCreado: EmpleadoInterface;
    let {direcciones} = empleado;
    let {vacunas} = empleado;
    this._empleadoService
      .updateById(id, empleado)
      .pipe(
        mergeMap(value => {
          empleadoCreado = value;
          direcciones = direcciones?.map(direccion => ({
            empleado: empleadoCreado.id,
            ...direccion,
          }));
          return this._direccionService.updateAll(direcciones!);
        }),
        mergeMap(values => {
          direcciones = values!;
          vacunas = vacunas?.map(vacuna => ({
            empleado: empleadoCreado.id,
            ...vacuna,
          }));
          return this._vacunaService.updateAll(vacunas!);
        }),
      )
      .subscribe(
        {
          next: values => {
            vacunas = values!;
            empleado.direcciones = direcciones;
            empleado.vacunas = vacunas;
            this.dialogRef.close(empleado);
          },
          error: console.log,
        },
      );
  }


}
