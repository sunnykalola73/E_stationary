import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PencilcolorComponent } from './pencilcolor.component';

describe('PencilcolorComponent', () => {
  let component: PencilcolorComponent;
  let fixture: ComponentFixture<PencilcolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencilcolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencilcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
