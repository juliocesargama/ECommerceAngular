import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorControlComponent } from './error-control.component';

describe('ErrorControlComponent', () => {
  let component: ErrorControlComponent;
  let fixture: ComponentFixture<ErrorControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
