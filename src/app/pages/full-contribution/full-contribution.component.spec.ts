import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullContributionComponent } from './full-contribution.component';

describe('FullContributionComponent', () => {
  let component: FullContributionComponent;
  let fixture: ComponentFixture<FullContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
