import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'website',
    loadChildren: () => import('../website/website.module').then(mod => mod.WebsiteModule)
  },
  {
    path: 'cms',
    loadChildren: () => import('../cms/cms.module').then(mod => mod.CmsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {
}
