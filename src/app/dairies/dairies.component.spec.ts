import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairiesComponent } from './dairies.component';

describe('DairiesComponent', () => {
  let component: DairiesComponent;
  let fixture: ComponentFixture<DairiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
