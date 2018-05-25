import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContributionsComponent } from './new-contributions.component';

describe('NewContributionsComponent', () => {
  let component: NewContributionsComponent;
  let fixture: ComponentFixture<NewContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
