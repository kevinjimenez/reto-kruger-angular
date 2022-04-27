import {Component, OnInit} from '@angular/core';
import {CreateEmpleadoInterface} from '../../../utils';
import {EmpleadoService} from '../../../core';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss'],
})
export class CrearEmpleadoComponent {

  constructor(
    private readonly _empleadoService: EmpleadoService,
  ) {
  }

  guardaEmpleado(empleado: CreateEmpleadoInterface) {
    // const a: CreateEmpleadoInterface = {...empleado};
    this._empleadoService.createOne(empleado).subscribe(
      {
        next: empleado => {
          console.log(empleado);
        },
        error: console.log,
      },
    );
  }
}
