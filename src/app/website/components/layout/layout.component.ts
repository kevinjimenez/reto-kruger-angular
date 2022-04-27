import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  // templateUrl: './layout.component.html',
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
}
