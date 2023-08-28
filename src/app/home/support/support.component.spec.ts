import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupportComponent } from './support.component';
import { LanguageService } from 'src/app/common-services/language.service';
import { HttpClientModule } from '@angular/common/http';

describe('SupportComponent', () => {
  let component: SupportComponent;
  let fixture: ComponentFixture<SupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportComponent],
      providers: [LanguageService],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
