import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenProjectsComponent } from './ken-projects.component';

describe('KenProjectsComponent', () => {
  let component: KenProjectsComponent;
  let fixture: ComponentFixture<KenProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KenProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
