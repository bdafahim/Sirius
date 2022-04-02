import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SankyChartComponent } from './sanky-chart.component';

describe('SankyChartComponent', () => {
  let component: SankyChartComponent;
  let fixture: ComponentFixture<SankyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SankyChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SankyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
