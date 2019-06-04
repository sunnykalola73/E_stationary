import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegestationaryComponent } from './collegestationary.component';

describe('CollegestationaryComponent', () => {
  let component: CollegestationaryComponent;
  let fixture: ComponentFixture<CollegestationaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegestationaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegestationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
