import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { ListarEmpleadosComponent } from './pages/listar-empleados/listar-empleados.component';
import { CrearEmpleadoComponent } from './pages/crear-empleado/crear-empleado.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ListarEmpleadosComponent,
    CrearEmpleadoComponent,
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule
  ]
})
export class CmsModule { }
