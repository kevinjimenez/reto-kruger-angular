import {Component, Input, OnInit} from '@angular/core';
import {EmpleadoInterface} from '../../../utils';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  @Input() empleados!: EmpleadoInterface[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.empleados);
  }

}
