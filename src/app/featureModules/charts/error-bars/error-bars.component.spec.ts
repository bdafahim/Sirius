import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBarsComponent } from './error-bars.component';

describe('ErrorBarsComponent', () => {
  let component: ErrorBarsComponent;
  let fixture: ComponentFixture<ErrorBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
