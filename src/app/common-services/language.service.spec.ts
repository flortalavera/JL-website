import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LanguageService } from './language.service';

describe('LanguageService', () => {
    let service: LanguageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [LanguageService]
        });
        service = TestBed.inject(LanguageService);
    });

    it('should set the language', waitForAsync(async () => {
        const lang = 'en';
        await service.setLanguage(lang).toPromise();
        expect(service['language']).toEqual(lang);
    }));

    it('should return the correct data', () => {
        service['data'] = { key1: 'value1', key2: 'value2' };
        const result = service.getData('key1');
        expect(result).toEqual('value1');
    });
});