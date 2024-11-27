import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodVComponent } from './food-v.component';

describe('FoodVComponent', () => {
  let component: FoodVComponent;
  let fixture: ComponentFixture<FoodVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodVComponent]
    });
    fixture = TestBed.createComponent(FoodVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
