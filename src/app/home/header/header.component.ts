import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('video', { static: true }) videoElement!: ElementRef;

  isPlaying = true;
  buttonImageSrc = '../../../assets/icons/pausa.png';

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