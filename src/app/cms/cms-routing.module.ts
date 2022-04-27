import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarEmpleadosComponent} from './pages/listar-empleados/listar-empleados.component';
import {CrearEmpleadoComponent} from './pages/crear-empleado/crear-empleado.component';
import {EmpleadoDetalleComponent} from '../shared/components/empleado-detalle/empleado-detalle.component';

const routes: Routes = [
  {
    path: 'empleados',
    component: ListarEmpleadosComponent
  },
  {
    path: 'empleado',
    component: CrearEmpleadoComponent
  },
  {
    path: 'empleado/:id',
    component: EmpleadoDetalleComponent,
  },
  {
    path: '',
    redirectTo: '/cms/empleados',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
