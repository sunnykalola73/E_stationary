import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerstationaryComponent } from './computerstationary.component';

describe('ComputerstationaryComponent', () => {
  let component: ComputerstationaryComponent;
  let fixture: ComponentFixture<ComputerstationaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerstationaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerstationaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
