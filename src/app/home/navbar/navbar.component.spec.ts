/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { LanguageService } from 'src/app/common-services/language.service';
import { of } from 'rxjs';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let languageService: LanguageService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            providers: [LanguageService]
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

    it('should load navbar items on initialization', () => {
        expect(component.navbarItems).toEqual(['Item 1', 'Item 2', 'Item 3']);
        expect(languageService.setLanguage).toHaveBeenCalledWith('es');
    });

    it('should reload home on calling reloadHome()', () => {
        spyOn(window.location, 'reload');
        component.reloadHome();
        expect(window.location.reload).toHaveBeenCalled();
    });

    it('should show menu items on calling showMenuItems()', () => {
        component.showMenuItems();
        expect(component.showItemsPage).toBe(true);
    });

    it('should change language and update navbar items on calling changeLanguage()', () => {
        spyOn(languageService, 'setLanguage').and.returnValue(of({
            navbarItems: ['Item A', 'Item B', 'Item C']
        }));

        component.changeLanguage('en');

        expect(component.navbarItems).toEqual(['Item A', 'Item B', 'Item C']);
        expect(languageService.setLanguage).toHaveBeenCalledWith('en');
    });

});*/
