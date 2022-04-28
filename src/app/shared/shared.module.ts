import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImgComponent} from './components/img/img.component';
import {EmpleadosComponent} from './components/empleados/empleados.component';
import {EmpleadoComponent} from './components/empleado/empleado.component';
import {DireccionComponent} from './components/direccion/direccion.component';
import {DireccionesComponent} from './components/direcciones/direcciones.component';
import {VacunaComponent} from './components/vacuna/vacuna.component';
import {VacunasComponent} from './components/vacunas/vacunas.component';
import {MaterialModule} from '../material/material.module';
import {EmpleadoDetalleComponent} from './components/empleado-detalle/empleado-detalle.component';
import {EmpleadoFormularioComponent} from './components/empleado-formulario/empleado-formulario.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditarComponent } from './modals/editar/editar.component';
import { CrearUsuarioContraseniaComponent } from './modals/crear-usuario-contrasenia/crear-usuario-contrasenia.component';
import { CredencialesFormularioComponent } from './components/credenciales-formulario/credenciales-formulario.component';


@NgModule({
  declarations: [
    ImgComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    DireccionComponent,
    DireccionesComponent,
    VacunaComponent,
    VacunasComponent,
    EmpleadoDetalleComponent,
    EmpleadoFormularioComponent,
    EditarComponent,
    CrearUsuarioContraseniaComponent,
    CredencialesFormularioComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ImgComponent,
    EmpleadosComponent,
    DireccionesComponent,
    VacunasComponent,
    EmpleadoDetalleComponent,
    EmpleadoFormularioComponent,
    EmpleadoComponent,
    CredencialesFormularioComponent,
  ],
})
export class SharedModule {
}
