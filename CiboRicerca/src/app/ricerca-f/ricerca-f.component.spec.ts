import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaFComponent } from './ricerca-f.component';

describe('RicercaFComponent', () => {
  let component: RicercaFComponent;
  let fixture: ComponentFixture<RicercaFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RicercaFComponent]
    });
    fixture = TestBed.createComponent(RicercaFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
