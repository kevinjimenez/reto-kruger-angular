import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImgComponent} from './components/img/img.component';


@NgModule({
  declarations: [ImgComponent],
  imports: [CommonModule],
  exports: [ImgComponent],
})
export class SharedModule {
}
