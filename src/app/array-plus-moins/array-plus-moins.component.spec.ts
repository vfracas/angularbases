import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayPlusMoinsComponent } from './array-plus-moins.component';

describe('ArrayPlusMoinsComponent', () => {
  let component: ArrayPlusMoinsComponent;
  let fixture: ComponentFixture<ArrayPlusMoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayPlusMoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayPlusMoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
