import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarEmpleadosComponent} from './pages/listar-empleados/listar-empleados.component';
import {CrearEmpleadoComponent} from './pages/crear-empleado/crear-empleado.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarEmpleadosComponent
  },
  {
    path: 'crear',
    component: CrearEmpleadoComponent
  },
  {
    path: '',
    redirectTo: '/cms/listar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
