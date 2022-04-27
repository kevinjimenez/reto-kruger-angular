import {Component, Input, OnInit} from '@angular/core';
import {DireccionInterface} from '../../../utils';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.scss']
})
export class DireccionesComponent implements OnInit {

  @Input() direcciones!: DireccionInterface[]

  constructor() { }

  ngOnInit(): void {
  }

}
