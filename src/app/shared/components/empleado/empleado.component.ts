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
    this._router.navigate(['/website', 'empleado', id]);
  }
}
