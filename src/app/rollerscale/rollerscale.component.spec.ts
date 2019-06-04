import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerscaleComponent } from './rollerscale.component';

describe('RollerscaleComponent', () => {
  let component: RollerscaleComponent;
  let fixture: ComponentFixture<RollerscaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollerscaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollerscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
