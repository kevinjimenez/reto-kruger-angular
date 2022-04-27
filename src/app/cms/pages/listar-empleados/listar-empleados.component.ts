import {Component, OnInit} from '@angular/core';
import {EmpleadoService} from '../../../core';
import {Observable} from 'rxjs';
import {EmpleadoInterface} from '../../../utils';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.scss'],
})
export class ListarEmpleadosComponent implements OnInit {
  // empleados$?: Observable<EmpleadoInterface[]>;
  empleados?: EmpleadoInterface[];

  constructor(
    private readonly _empleadoService: EmpleadoService,
  ) {
  }

  ngOnInit(): void {
    this._empleadoService.findAll().subscribe(empleados => this.empleados = empleados);
  }

}
