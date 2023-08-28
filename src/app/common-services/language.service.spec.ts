import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
    let service: LanguageService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LanguageService]
        });
        service = TestBed.inject(LanguageService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should set the language', waitForAsync(async () => {
        const lang = 'en';

        service.setLanguage(lang).subscribe(() => {
            service.getData().subscribe(data => {
                expect(data).toBeDefined();
                expect(data.key1).toEqual('value1');
            });
        });

        const req = httpMock.expectOne(`assets/language/${lang}.json`);
        expect(req.request.method).toBe('GET');
        req.flush({ key1: 'value1', key2: 'value2' });
    }));
});
