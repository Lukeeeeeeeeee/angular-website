import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCarComponent } from './b-car.component';

describe('BCarComponent', () => {
  let component: BCarComponent;
  let fixture: ComponentFixture<BCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
