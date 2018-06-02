import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContributionComponent } from './edit-contribution.component';

describe('EditContributionComponent', () => {
  let component: EditContributionComponent;
  let fixture: ComponentFixture<EditContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
