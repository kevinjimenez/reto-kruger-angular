import {Component, Input, OnInit} from '@angular/core';
import {EmpleadoInterface} from '../../../utils';
import {Router} from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss'],
})
export class EmpleadoComponent {
  @Input() empleado!: EmpleadoInterface;

  constructor(
    private readonly _router: Router,
  ) {
  }

  irADetalle(id: number) {
    const usuario = JSON.parse(localStorage.getItem('payload')!) as EmpleadoInterface;
    const {rol} = usuario;
    const path = rol === 'admin' ? '/cms/empleado' : '/website/empleado';
    this._router.navigate([path, id]);
  }
}
