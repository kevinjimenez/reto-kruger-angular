import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EmpleadoService} from '../../../core';
import {EmpleadoInterface} from '../../../utils';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.scss'],
})
export class EmpleadoDetalleComponent implements OnInit {

  idEmpleado!: number;
  empleado!: EmpleadoInterface;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _empleadoService: EmpleadoService,
  ) {
  }

  ngOnInit(): void {
    this._activatedRoute
      .params
      .subscribe((params: Params) => this.idEmpleado = +params['id']);

    this._empleadoService
      .findOneById(this.idEmpleado)
      .subscribe(
        empleado => this.empleado = empleado,
      );
  }

  eliminarEmpleado(id: number) {
    this._empleadoService.deleteById(id).subscribe(
      _ => {
        this._router.navigate(['cms','empleados'])
      }
    );
  }

  darDeAlta(id: number) {
    console.log('crear login');
  }
}
