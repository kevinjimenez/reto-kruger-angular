import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImgComponent} from './components/img/img.component';
import {EmpleadosComponent} from './components/empleados/empleados.component';
import {EmpleadoComponent} from './components/empleado/empleado.component';
import { DireccionComponent } from './components/direccion/direccion.component';
import { DireccionesComponent } from './components/direcciones/direcciones.component';
import { VacunaComponent } from './components/vacuna/vacuna.component';
import { VacunasComponent } from './components/vacunas/vacunas.component';


@NgModule({
  declarations: [ImgComponent, EmpleadosComponent, EmpleadoComponent, DireccionComponent, DireccionesComponent, VacunaComponent, VacunasComponent],
  imports: [CommonModule],
  exports: [ImgComponent, EmpleadosComponent],
})
export class SharedModule {
}
