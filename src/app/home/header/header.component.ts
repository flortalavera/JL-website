import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;
  isVideoPlaying = false;

  playVideo() {
    this.myVideo.nativeElement.play();
    this.isVideoPlaying = true;
  }

  pauseVideo() {
    this.myVideo.nativeElement.pause();
    this.isVideoPlaying = false;
  }

}
