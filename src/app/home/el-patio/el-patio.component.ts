import { Component } from '@angular/core';

@Component({
  selector: 'app-el-patio',
  templateUrl: './el-patio.component.html',
  styleUrls: ['./el-patio.component.scss']
})
export class ElPatioComponent {
  images = [
    "assets/images/el-patio/patio1.jpg",
    "assets/images/el-patio/patio2.jpg",
    "assets/images/el-patio/patio3.jpg",
    "assets/images/el-patio/patio4.jpg",
    "assets/images/el-patio/patio5.jpg",
    "assets/images/el-patio/patio6.jpg",
    "assets/images/el-patio/patio7.jpg"
  ];

  currentSlide = 0;

  changeSlide(index: number) {
    this.currentSlide = index;
  }

}
