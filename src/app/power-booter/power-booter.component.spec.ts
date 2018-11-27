import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBooterComponent } from './power-booter.component';

describe('PowerBooterComponent', () => {
  let component: PowerBooterComponent;
  let fixture: ComponentFixture<PowerBooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerBooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerBooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
