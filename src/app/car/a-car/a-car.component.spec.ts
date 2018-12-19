import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACarComponent } from './a-car.component';

describe('ACarComponent', () => {
  let component: ACarComponent;
  let fixture: ComponentFixture<ACarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
