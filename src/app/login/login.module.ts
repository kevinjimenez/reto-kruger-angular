import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material/material.module';
import { IngresarAppComponent } from './modals/ingresar-app/ingresar-app.component';


@NgModule({
  declarations: [
    LoginComponent,
    IngresarAppComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    MaterialModule,
  ],
})
export class LoginModule {
}
