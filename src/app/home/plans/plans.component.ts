import { Component } from '@angular/core';
import { LanguageService } from 'src/app/common-services/language.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
  plans: any;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.getData().subscribe((data) => {
      if (data) {
        this.plans = data.plans;
      }
    });
  }

}
