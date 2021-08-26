import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhUserDetailsComponent } from './gh-user-details.component';

describe('GhUserDetailsComponent', () => {
  let component: GhUserDetailsComponent;
  let fixture: ComponentFixture<GhUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
