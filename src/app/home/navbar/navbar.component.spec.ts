import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { LanguageService } from 'src/app/common-services/language.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu'; // Importa MatMenuModule

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let languageService: LanguageService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            providers: [LanguageService],
            imports: [HttpClientModule, MatMenuModule] // Agrega MatMenuModule a las importaciones
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        languageService = TestBed.inject(LanguageService);

        spyOn(languageService, 'setLanguage').and.returnValue(of({
            navbarItems: ['Item 1', 'Item 2', 'Item 3']
        }));

        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });

});