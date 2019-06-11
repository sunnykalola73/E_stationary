import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincontrollerComponent } from './logincontroller.component';

describe('LogincontrollerComponent', () => {
  let component: LogincontrollerComponent;
  let fixture: ComponentFixture<LogincontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
