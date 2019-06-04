import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendriveComponent } from './pendrive.component';

describe('PendriveComponent', () => {
  let component: PendriveComponent;
  let fixture: ComponentFixture<PendriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
