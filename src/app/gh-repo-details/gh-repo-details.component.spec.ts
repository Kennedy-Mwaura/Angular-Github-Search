import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhRepoDetailsComponent } from './gh-repo-details.component';

describe('GhRepoDetailsComponent', () => {
  let component: GhRepoDetailsComponent;
  let fixture: ComponentFixture<GhRepoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhRepoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhRepoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
