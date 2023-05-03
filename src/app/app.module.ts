import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Angular Material and other libreries */
import { MatCardModule } from '@angular/material/card';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HeaderComponent } from './home/header/header.component';
import { PresentationComponent } from './home/presentation/presentation.component';
import { PlansComponent } from './home/plans/plans.component';
import { FooterComponent } from './home/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElPatioComponent } from './home/el-patio/el-patio.component';
import { SupportComponent } from './home/support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    PresentationComponent,
    PlansComponent,
    FooterComponent,
    ElPatioComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgbCarouselModule,
    NgbModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
