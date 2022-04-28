import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor(
    private readonly _router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  salir() {
    localStorage.removeItem('payload');
    sessionStorage.removeItem('jwt');
    this._router.navigate(['/']);
  }
}
