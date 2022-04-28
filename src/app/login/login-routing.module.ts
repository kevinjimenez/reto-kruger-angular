import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {AuthGuard} from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'website',
    loadChildren: () => import('../website/website.module').then(mod => mod.WebsiteModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'cms',
    loadChildren: () => import('../cms/cms.module').then(mod => mod.CmsModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {
}
