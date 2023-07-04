import { Component, ElementRef, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/common-services/language.service';

@Component({
  selector: 'app-el-patio',
  templateUrl: './el-patio.component.html',
  styleUrls: ['./el-patio.component.scss'],
})

export class ElPatioComponent {
  palettes: any[] = [];
  currentIndex: number = 0;
  visiblePalettes: any[] = [];
  elPatio: any;
  
  @ViewChild('video', { static: true }) videoElement!: ElementRef;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {

    this.languageService.getData().subscribe((data) => {
      if (data) {
        this.elPatio = data.elPatio;
      }
    });

    this.palettes = [
      { image: "assets/images/el-patio/patio9.jpg" },
      { image: "assets/images/el-patio/patio2.jpg" },
      { image: "assets/images/el-patio/patio3.jpg" },
      { image: "assets/images/el-patio/patio4.jpg" },
      { image: "assets/images/el-patio/patio5.jpg" },
      { image: "assets/images/el-patio/patio6.jpg" },
      { image: "assets/images/el-patio/patio7.jpg" },
      { image: "assets/images/el-patio/patio8.jpg" },
      { image: "assets/images/el-patio/patio1.jpg" },
      { image: "assets/images/el-patio/patio10.jpg" },

    ];

    this.updateVisiblePalettes();
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisiblePalettes();
    }
  }

  next() {
    if (this.currentIndex < this.palettes.length - 1) {
      this.currentIndex++;
      this.updateVisiblePalettes();
    }
  }

  updateVisiblePalettes() {
    const start = this.currentIndex;
    const end = start + 1;
    this.visiblePalettes = this.palettes.slice(start, end);
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