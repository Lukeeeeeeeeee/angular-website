import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCarComponent } from './c-car.component';

describe('CCarComponent', () => {
  let component: CCarComponent;
  let fixture: ComponentFixture<CCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
