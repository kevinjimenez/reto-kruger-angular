import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../core';
import {MatDialog} from '@angular/material/dialog';
import {
  CrearUsuarioContraseniaComponent,
} from '../shared/modals/crear-usuario-contrasenia/crear-usuario-contrasenia.component';
import {IngresarAppComponent} from './modals/ingresar-app/ingresar-app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(
    private readonly _router: Router,
    public dialog: MatDialog,
  ) {
    localStorage.removeItem('payload');
    sessionStorage.removeItem('jwt');
  }

  irAHome(): void {
    const dialogRef = this.dialog.open(IngresarAppComponent);
    dialogRef
      .afterClosed()
      .subscribe({
          next: v => this._router.navigate([v]),
        },
      );
    // this._authService
    //   .login({
    //     usuario: 'kevorla2',
    //     password: '12345678',
    //   })
    //   .subscribe({
    //     next: payload => {
    //       console.log(payload)
    //       sessionStorage.setItem('jwt', payload.access_token)
    //       localStorage.setItem('payload', JSON.stringify(payload.empleado))
    //       this._router.navigate(['/website', 'home']);
    //     }
    //   });
  }

  // irACMS(): void {
  //   const dialogRef = this.dialog.open(IngresarAppComponent, {
  //     data: '/cms',
  //   });
  //   // this._router.navigate(['/cms']);
  // }
}
