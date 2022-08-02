import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralMembersPageComponent } from './general-members-page.component';

describe('GeneralMembersPageComponent', () => {
  let component: GeneralMembersPageComponent;
  let fixture: ComponentFixture<GeneralMembersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralMembersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralMembersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
