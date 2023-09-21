import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  socialMedia = [
    {
      name: 'instagram',
      src: '../../assets/img/instagram.png',
      link: 'https://instagram.com/savinglass'
    },
    {
      name: 'facebook',
      src: '../../assets/img/facebook.png',
      link: 'https://www.facebook.com/savinglass'      
    },
    {
      name: 'tiktok',
      src: '../../assets/img/tiktok.png',
      link: 'https://www.tiktok.com/@savingglass'      
    },
    {
      name: 'email',
      src: '../../assets/img/email.png',
      link: 'savingglass2020@gmail.com'      
    }
  ];

}
