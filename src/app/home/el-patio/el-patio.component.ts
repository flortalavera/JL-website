import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/common-services/language.service';

@Component({
  selector: 'app-el-patio',
  templateUrl: './el-patio.component.html',
  styleUrls: ['./el-patio.component.scss'],
})

export class ElPatioComponent {
  images: any[] = [];
  currentIndex: number = 0;
  visibleImages: any[] = [];
  elPatio: any;
  
  @ViewChild('video', { static: true }) videoElement!: ElementRef;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {

    this.languageService.getData().subscribe((data) => {
      if (data) {
        this.elPatio = data.elPatio;
      }
    });

    this.images = [
      { image: "assets/images/el-patio/patio9.jpg", title: "imagen del patio" },
      { image: "assets/images/el-patio/patio2.jpg", title: "imagen del patio" },
      { image: "assets/images/el-patio/patio3.jpg", title: "imagen del patio" },
      { image: "assets/images/el-patio/patio4.jpg", title: "imagen del patio" },
      { image: "assets/images/el-patio/patio5.jpg", title: "imagen del patio" },
      { image: "assets/images/el-patio/patio6.jpg", title: "imagen del patio" },
      { image: "assets/images/el-patio/patio7.jpg", title: "imagen del patio" },
      { image: "assets/images/el-patio/patio8.jpg", title: "imagen del patio" },
      { image: "assets/images/el-patio/patio1.jpg", title: "imagen del patio" },
      { image: "assets/images/el-patio/patio10.jpg", title: "imagen del patio" },

    ];

    this.updateVisibleImages();
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleImages();
    }
  }

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.updateVisibleImages();
    }
  }

  updateVisibleImages() {
    const start = this.currentIndex;
    const end = start + 1;
    this.visibleImages = this.images.slice(start, end);
  }

  isPlaying = true;
  buttonImageSrc = '../../../assets/icons/play.png';

  toggleVideo() {
    if (this.videoElement) {
      if (this.videoElement.nativeElement.paused) {
        this.videoElement.nativeElement.play();
        this.isPlaying = true;
        this.buttonImageSrc = '../../../assets/icons/pausa.png';
      } else {
        this.videoElement.nativeElement.pause();
        this.isPlaying = false;
        this.buttonImageSrc = '../../../assets/icons/play.png';
      }
    }
  }  


}