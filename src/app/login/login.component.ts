import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService,
  ) {
  }

  irAHome(): void {
    this._authService
      .login({
        usuario: 'kevorla24',
        password: '12345678',
      })
      .subscribe({
        next: payload => {
          console.log(payload)
          sessionStorage.setItem('jwt', payload.access_token)
          localStorage.setItem('payload', JSON.stringify(payload.empleado))
          this._router.navigate(['/website', 'home']);
        }
      });
  }

  irACMS(): void {
    this._router.navigate(['/cms']);
  }
}
