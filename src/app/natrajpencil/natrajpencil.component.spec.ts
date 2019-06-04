import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatrajpencilComponent } from './natrajpencil.component';

describe('NatrajpencilComponent', () => {
  let component: NatrajpencilComponent;
  let fixture: ComponentFixture<NatrajpencilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatrajpencilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatrajpencilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
