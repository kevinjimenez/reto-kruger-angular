import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  img: string = 'soy una img';

  @Input('img')
  set changeImg(nuevaImg: string) {
    this.img = nuevaImg;
  }

  @Input() alt: string = 'soy una alt';
  @Input() alto: string = '20px';
  @Input() ancho: string = '20px';

  @Output() loaded = new EventEmitter<string>();
  imgDefault = 'assets/images/default.png';

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
