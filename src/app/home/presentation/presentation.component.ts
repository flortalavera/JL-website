import { Component, ElementRef, HostListener } from '@angular/core';
import { LanguageService } from 'src/app/common-services/language.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  isAnimated = false;
  presentation: any;
  greeting: string = '';

  constructor(private el: ElementRef,
    private languageService: LanguageService) { }

    ngOnInit() {
      this.languageService.setLanguage('es').subscribe(data => {
        this.presentation = data.presentation;
        console.log(this.presentation.greeting)
      });
    }

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
