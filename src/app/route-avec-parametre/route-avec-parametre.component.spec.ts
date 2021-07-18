import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAvecParametreComponent } from './route-avec-parametre.component';

describe('RouteAvecParametreComponent', () => {
  let component: RouteAvecParametreComponent;
  let fixture: ComponentFixture<RouteAvecParametreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteAvecParametreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAvecParametreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
