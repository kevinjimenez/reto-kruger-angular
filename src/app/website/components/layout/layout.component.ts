import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  // templateUrl: './layout.component.html',
  template: `
    <section style="padding: 1rem 1rem 1rem 1rem">
      <app-nav></app-nav>
    </section>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
}
