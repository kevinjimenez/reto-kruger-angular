import {Component, Input, OnInit} from '@angular/core';
import {DireccionInterface} from '../../../utils';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.scss'],
})
export class DireccionComponent implements OnInit {

  @Input() direccion!: DireccionInterface;

  constructor() {
  }

  ngOnInit(): void {
  }

}
