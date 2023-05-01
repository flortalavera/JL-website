import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  isAnimated = false;

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const element = this.el.nativeElement.querySelector('.who-is-juani');
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (!this.isAnimated && rect.top <= windowHeight * 0.75) {
      this.isAnimated = true;
      element.classList.add('animate');
    }
  }

}
