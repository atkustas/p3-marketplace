import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlowComponent } from './navbarlow.component';

describe('NavbarlowComponent', () => {
  let component: NavbarlowComponent;
  let fixture: ComponentFixture<NavbarlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarlowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
