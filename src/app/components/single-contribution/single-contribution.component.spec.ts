import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleContributionComponent } from './single-contribution.component';

describe('SingleContributionComponent', () => {
  let component: SingleContributionComponent;
  let fixture: ComponentFixture<SingleContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
