import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCommitteePageComponent } from './current-committee-page.component';

describe('CurrentCommitteePageComponent', () => {
  let component: CurrentCommitteePageComponent;
  let fixture: ComponentFixture<CurrentCommitteePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentCommitteePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentCommitteePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
