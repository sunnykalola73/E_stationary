import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometryboxComponent } from './geometrybox.component';

describe('GeometryboxComponent', () => {
  let component: GeometryboxComponent;
  let fixture: ComponentFixture<GeometryboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometryboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometryboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
