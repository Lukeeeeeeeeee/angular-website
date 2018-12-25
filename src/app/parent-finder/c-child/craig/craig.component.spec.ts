import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraigComponent } from './craig.component';

describe('CraigComponent', () => {
  let component: CraigComponent;
  let fixture: ComponentFixture<CraigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
