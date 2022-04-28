import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {EmpleadoService} from '../../../core';
import {EmpleadoInterface} from '../../../utils';
import {MatDialog} from '@angular/material/dialog';
import {EditarComponent} from '../../modals/editar/editar.component';
import {
  CrearUsuarioContraseniaComponent
} from '../../modals/crear-usuario-contrasenia/crear-usuario-contrasenia.component';

@Component({
  selector: 'app-empleado-detalle',
  templateUrl: './empleado-detalle.component.html',
  styleUrls: ['./empleado-detalle.component.scss'],
})
export class EmpleadoDetalleComponent implements OnInit {

  idEmpleado!: number;
  empleado!: EmpleadoInterface;
  usuarioLogeado!: EmpleadoInterface;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _empleadoService: EmpleadoService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.usuarioLogeado = JSON.parse(localStorage.getItem('payload')!) as EmpleadoInterface

    this._activatedRoute
      .params
      .subscribe((params: Params) => this.idEmpleado = +params['id']);

    this._empleadoService
      .findOneById(this.idEmpleado)
      .subscribe(
        empleado => this.empleado = empleado,
      );
  }

  eliminarEmpleado(id: number) {
    const ok = confirm('Desear eliminar?')
    if(ok){
      this._empleadoService.deleteById(id).subscribe(
        _ => {
          this._router.navigate(['cms', 'empleados']);
        },
      );
    }
  }

  darDeAlta(empleado: EmpleadoInterface) {
    const dialogRef = this.dialog.open(CrearUsuarioContraseniaComponent, {
      data: empleado,
    });
  }

  editarEmpleado(empleado: EmpleadoInterface) {
    const dialogRef = this.dialog.open(EditarComponent, {
      data: empleado,
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.empleado = result;
    // });
  }
}
