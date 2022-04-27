import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WebsiteRoutingModule} from './website-routing.module';
import {NavComponent} from './components/nav/nav.component';
import {LayoutComponent} from './components/layout/layout.component';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
  ],
})
export class WebsiteModule {
}
