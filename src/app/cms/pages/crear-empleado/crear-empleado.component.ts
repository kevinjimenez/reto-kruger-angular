import {Component} from '@angular/core';
import {CreateEmpleadoInterface, EmpleadoInterface} from '../../../utils';
import {DireccionService, EmpleadoService, VacunaService} from '../../../core';
import {mergeMap} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss'],
})
export class CrearEmpleadoComponent {

  constructor(
    private readonly _router: Router,
    private readonly _empleadoService: EmpleadoService,
    private readonly _direccionService: DireccionService,
    private readonly _vacunaService: VacunaService,
  ) {
  }

  guardaEmpleado(empleado: CreateEmpleadoInterface) {
    let empleadoCreado: EmpleadoInterface;
    let {direcciones} = empleado;
    let {vacunas} = empleado;
    this._empleadoService
      .createOne(empleado)
      .pipe(
        mergeMap(value => {
          empleadoCreado = value;
          direcciones = direcciones?.map(direccion => ({
            empleado: empleadoCreado.id,
            ...direccion,
          }));
          return this._direccionService.createMany(direcciones!);
        }),
        mergeMap(values => {
          direcciones = values!;
          vacunas = vacunas?.map(vacuna => ({
            empleado: empleadoCreado.id,
            ...vacuna,
          }));
          return this._vacunaService.createMany(vacunas!);
        }),
      )
      .subscribe(
        {
          next: values => {
            vacunas = values!;
            console.log(empleado);
            console.log(direcciones);
            console.log(vacunas);
            this._router.navigate(['/cms','empleados'])
          },
          error: console.log,
        },
      );
  }
}
