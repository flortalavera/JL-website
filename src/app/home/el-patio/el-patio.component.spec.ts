import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElPatioComponent } from './el-patio.component';
import { LanguageService } from 'src/app/common-services/language.service';
import { HttpClientModule } from '@angular/common/http';

describe('ElPatioComponent', () => {
  let component: ElPatioComponent;
  let fixture: ComponentFixture<ElPatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, HttpClientModule],
      declarations: [ElPatioComponent],
      providers: [LanguageService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElPatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});