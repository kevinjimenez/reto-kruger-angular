import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {EmpleadoDetalleComponent} from '../shared/components/empleado-detalle/empleado-detalle.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'empleado/:id',
        component: EmpleadoDetalleComponent,
      },
      {
        path: '',
        redirectTo: '/website/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {
}
