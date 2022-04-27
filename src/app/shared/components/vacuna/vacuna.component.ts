import {Component, Input, OnInit} from '@angular/core';
import {VacunaInterface} from '../../../utils';

@Component({
  selector: 'app-vacuna',
  templateUrl: './vacuna.component.html',
  styleUrls: ['./vacuna.component.scss']
})
export class VacunaComponent implements OnInit {
  @Input() vacuna!: VacunaInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
