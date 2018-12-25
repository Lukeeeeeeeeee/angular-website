import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CathyComponent } from './cathy.component';

describe('CathyComponent', () => {
  let component: CathyComponent;
  let fixture: ComponentFixture<CathyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CathyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
