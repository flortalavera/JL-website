import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElPatioComponent } from './el-patio.component';

describe('ElPatioComponent', () => {
  let component: ElPatioComponent;
  let fixture: ComponentFixture<ElPatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElPatioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElPatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
