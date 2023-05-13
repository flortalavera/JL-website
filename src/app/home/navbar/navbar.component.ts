import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  showItemsPage = false;
  public menu: any;
  
  reloadHome(){
    window.location.reload();
  }

  showMenuItems(){
    this.showItemsPage = true;
  }

  changeLanguage(language: string): void {
    console.log(language)
  }

}
