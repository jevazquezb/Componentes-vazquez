import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  candles = [
    {
      name: 'Arena',
      src: '../../assets/img/cactus.jpeg',
      price: 80,
    },
    {
      name: 'Cítricos',
      src: '../../assets/img/citricos.jpeg',
      price: 120,
    },
    {
      name: 'Flores',
      src: '../../assets/img/flores.jpeg',
      price: 110,
    },
    {
      name: 'Lavanda',
      src: '../../assets/img/lavanda.jpeg',
      price: 110,
    },
    {
      name: 'Mar',
      src: '../../assets/img/mar.jpeg',
      price: 140,
    },
    {
      name: 'Frutos secos',
      src: '../../assets/img/secos.jpeg',
      price: 130,
    },    
  ];
}
