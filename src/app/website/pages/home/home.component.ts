import {Component, OnInit} from '@angular/core';
import {EmpleadoInterface} from '../../../utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  empleado?: EmpleadoInterface;

  constructor() {
  }

  ngOnInit(): void {
    const a = localStorage.getItem('payload');
    this.empleado = JSON.parse(a!);
    console.log(JSON.parse(a!));
  }

}
