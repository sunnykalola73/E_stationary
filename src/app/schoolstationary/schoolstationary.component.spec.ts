import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolstationaryComponent } from './schoolstationary.component';

describe('SchoolstationaryComponent', () => {
  let component: SchoolstationaryComponent;
  let fixture: ComponentFixture<SchoolstationaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolstationaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolstationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
