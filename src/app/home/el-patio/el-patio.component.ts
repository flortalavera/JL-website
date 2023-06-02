import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-el-patio',
  templateUrl: './el-patio.component.html',
  styleUrls: ['./el-patio.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(300)),
    ]),
  ]
})

export class ElPatioComponent {
  images = [
    "assets/images/el-patio/patio1.jpg",
    "assets/images/el-patio/patio2.jpg",
    "assets/images/el-patio/patio3.jpg",
    "assets/images/el-patio/patio4.jpg",
    "assets/images/el-patio/patio5.jpg",
    "assets/images/el-patio/patio6.jpg",
    "assets/images/el-patio/patio7.jpg",
    "assets/images/el-patio/patio8.jpg",
    "assets/images/el-patio/patio9.jpg",
    "assets/images/el-patio/patio10.jpg",
  ];

  selectedImage: string = '';
  showModal: boolean = false;

  openImageModal(img: string) {
    this.selectedImage = img;
    this.showModal = true;
  }

  closeImageModal() {
    this.showModal = false;
  }

}