import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrafteromegaComponent } from './drafteromega.component';

describe('DrafteromegaComponent', () => {
  let component: DrafteromegaComponent;
  let fixture: ComponentFixture<DrafteromegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrafteromegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrafteromegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
