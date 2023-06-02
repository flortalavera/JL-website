import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.elementRef.nativeElement.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(this.elementRef.nativeElement);
  }
}