import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CmsRoutingModule} from './cms-routing.module';
import {ListarEmpleadosComponent} from './pages/listar-empleados/listar-empleados.component';
import {CrearEmpleadoComponent} from './pages/crear-empleado/crear-empleado.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import { LayoutComponent } from './components/layout/layout.component';
import { BarraBusquedaComponent } from './components/barra-busqueda/barra-busqueda.component';


@NgModule({
  declarations: [
    ListarEmpleadosComponent,
    CrearEmpleadoComponent,
    LayoutComponent,
    BarraBusquedaComponent,
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class CmsModule {
}
