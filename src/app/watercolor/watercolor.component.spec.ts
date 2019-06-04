import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatercolorComponent } from './watercolor.component';

describe('WatercolorComponent', () => {
  let component: WatercolorComponent;
  let fixture: ComponentFixture<WatercolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatercolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatercolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
