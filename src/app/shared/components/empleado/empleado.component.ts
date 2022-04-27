import {Component, Input, OnInit} from '@angular/core';
import {EmpleadoInterface} from '../../../utils';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss'],
})
export class EmpleadoComponent {
  @Input() empleado!: EmpleadoInterface;
}
