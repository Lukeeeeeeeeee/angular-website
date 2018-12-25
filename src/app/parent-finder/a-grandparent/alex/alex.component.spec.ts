import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexComponent } from './alex.component';

describe('AlexComponent', () => {
  let component: AlexComponent;
  let fixture: ComponentFixture<AlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
