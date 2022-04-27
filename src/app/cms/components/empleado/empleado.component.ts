import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss'],
})
export class EmpleadoComponent {
  //! TIPAR
  @Input() empleado: any;
}
