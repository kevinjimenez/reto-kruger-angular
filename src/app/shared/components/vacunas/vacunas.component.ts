import {Component, Input, OnInit} from '@angular/core';
import {VacunaInterface} from '../../../utils';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.component.html',
  styleUrls: ['./vacunas.component.scss']
})
export class VacunasComponent implements OnInit {

  @Input() vacunas!: VacunaInterface[];

  constructor() { }

  ngOnInit(): void {
  }

}
