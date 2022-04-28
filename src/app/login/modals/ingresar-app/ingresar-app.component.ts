import {Component, Inject, OnInit} from '@angular/core';
import {LoginInterface} from '../../../utils';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {LoginComponent} from '../../login.component';
import {AuthService} from '../../../core';


@Component({
  selector: 'app-ingresar-app',
  templateUrl: './ingresar-app.component.html',
  styleUrls: ['./ingresar-app.component.scss'],
})
export class IngresarAppComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: string,
    public dialogRef: MatDialogRef<LoginComponent>,
    private readonly _authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  credenciales(payload: LoginInterface) {
    console.log(payload);
    this._authService
      .login(payload)
      .subscribe({
        next: v => {
          console.log(v);
          sessionStorage.setItem('jwt', v.access_token);
          localStorage.setItem('payload', JSON.stringify(v.empleado));
          console.log(v.empleado.rol);
          if (v.empleado.rol === 'admin') {
            this.dialogRef.close('/cms');
            return;
          }
          this.dialogRef.close('/website/home');

        },
      });
  }
}
