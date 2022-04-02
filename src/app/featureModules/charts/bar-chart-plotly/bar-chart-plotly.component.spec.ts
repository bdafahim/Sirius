import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartPlotlyComponent } from './bar-chart-plotly.component';

describe('BarChartPlotlyComponent', () => {
  let component: BarChartPlotlyComponent;
  let fixture: ComponentFixture<BarChartPlotlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartPlotlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartPlotlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
