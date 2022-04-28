import {Component, Inject, OnInit} from '@angular/core';
import {EmpleadoInterface, LoginInterface} from '../../../utils';
import {AuthService, EmpleadoService} from '../../../core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
  CredencialesFormularioComponent,
} from '../../components/credenciales-formulario/credenciales-formulario.component';
import {mergeMap} from 'rxjs';

@Component({
  selector: 'app-crear-usuario-contrasenia',
  templateUrl: './crear-usuario-contrasenia.component.html',
  styleUrls: ['./crear-usuario-contrasenia.component.scss'],
})
export class CrearUsuarioContraseniaComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: EmpleadoInterface,
    public dialogRef: MatDialogRef<CredencialesFormularioComponent>,
    private readonly _authService: AuthService,
    private readonly _empleadoService: EmpleadoService,
  ) {
  }

  ngOnInit(): void {
  }

  credenciales(payload: LoginInterface) {
    this._authService
      .signin(payload)
      .pipe(
        mergeMap(v => this._empleadoService
          .updateById(this.data.id, {login: (v.id as number)})),
      )
      .subscribe(
        {
          next: empleado => {
            console.log(empleado);
            this.dialogRef.close(empleado);
          },
        },
      );
  }
}
