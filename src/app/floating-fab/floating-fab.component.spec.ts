import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingFabComponent } from './floating-fab.component';

describe('FloatingFabComponent', () => {
  let component: FloatingFabComponent;
  let fixture: ComponentFixture<FloatingFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingFabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
