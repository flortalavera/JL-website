import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-el-patio',
  templateUrl: './el-patio.component.html',
  styleUrls: ['./el-patio.component.scss'],
  providers: [NgbCarouselConfig]
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

