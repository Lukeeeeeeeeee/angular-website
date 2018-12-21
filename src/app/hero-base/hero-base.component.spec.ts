import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBaseComponent } from './hero-base.component';

describe('HeroBaseComponent', () => {
  let component: HeroBaseComponent;
  let fixture: ComponentFixture<HeroBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
