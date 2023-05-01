import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  elementToAnimate: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.elementToAnimate = this.el.nativeElement.querySelector('.icons-section');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const rect = this.elementToAnimate.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const topVisible = rect.top <= windowHeight && rect.top >= 0;
    const bottomVisible = rect.bottom <= windowHeight && rect.bottom >= 0;

    if (topVisible || bottomVisible) {
      this.elementToAnimate.classList.add('animate');
    }
  }


}
