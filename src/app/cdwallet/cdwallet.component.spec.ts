import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdwalletComponent } from './cdwallet.component';

describe('CdwalletComponent', () => {
  let component: CdwalletComponent;
  let fixture: ComponentFixture<CdwalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdwalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
