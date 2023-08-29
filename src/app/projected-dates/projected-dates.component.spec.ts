import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedDatesComponent } from './projected-dates.component';

describe('ProjectedDatesComponent', () => {
  let component: ProjectedDatesComponent;
  let fixture: ComponentFixture<ProjectedDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectedDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectedDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
