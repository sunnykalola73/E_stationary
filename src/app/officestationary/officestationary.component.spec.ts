import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficestationaryComponent } from './officestationary.component';

describe('OfficestationaryComponent', () => {
  let component: OfficestationaryComponent;
  let fixture: ComponentFixture<OfficestationaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficestationaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficestationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
