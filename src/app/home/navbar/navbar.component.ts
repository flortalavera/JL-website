import { Component } from '@angular/core';
import { LanguageService } from 'src/app/common-services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showItemsPage = false;
  public menu: any;
  navbarItems: string[] = [];

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.setLanguage('es').subscribe(data => {
      this.navbarItems = data.navbarItems;
    });
  }
  
  reloadHome(){
    window.location.reload();
  }

  showMenuItems(){
    this.showItemsPage = true;
  }

  changeLanguage(language: string): void {
    this.languageService.setLanguage(language).subscribe(data => {
      this.navbarItems = data.navbarItems;
    });
  }

}
