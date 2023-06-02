import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  /*it('should toggle video playback', () => {
    const videoElement = component.videoElement.nativeElement;
    
    expect(component.isPlaying).toBe(true);
    expect(component.buttonImageSrc).toContain('pausa');

    videoElement.paused = true;
    component.toggleVideo();
    expect(component.isPlaying).toBe(true);
    expect(component.buttonImageSrc).toContain('pausa');

   videoElement.paused = false;
    component.toggleVideo();
    expect(component.isPlaying).toBe(false);
    expect(component.buttonImageSrc).toContain('play');
  });*/

});