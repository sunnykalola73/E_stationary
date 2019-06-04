import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCraftComponent } from './art-craft.component';

describe('ArtCraftComponent', () => {
  let component: ArtCraftComponent;
  let fixture: ComponentFixture<ArtCraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtCraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
