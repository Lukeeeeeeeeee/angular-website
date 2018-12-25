import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentFinderComponent } from './parent-finder.component';

describe('ParentFinderComponent', () => {
  let component: ParentFinderComponent;
  let fixture: ComponentFixture<ParentFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
