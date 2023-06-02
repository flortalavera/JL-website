import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElPatioComponent } from './el-patio.component';

describe('ElPatioComponent', () => {
  let component: ElPatioComponent;
  let fixture: ComponentFixture<ElPatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ElPatioComponent]
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

  it('should open the image modal', () => {
    const img = 'assets/images/el-patio/patio1.jpg';
    component.openImageModal(img);
    expect(component.showModal).toBeTrue();
    expect(component.selectedImage).toEqual(img);
  });

  it('should close the image modal', () => {
    component.closeImageModal();
    expect(component.showModal).toBeFalse();
  });
});
