import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarryComponent } from './barry.component';

describe('BarryComponent', () => {
  let component: BarryComponent;
  let fixture: ComponentFixture<BarryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
