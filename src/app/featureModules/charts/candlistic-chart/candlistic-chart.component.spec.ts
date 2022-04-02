import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlisticChartComponent } from './candlistic-chart.component';

describe('CandlisticChartComponent', () => {
  let component: CandlisticChartComponent;
  let fixture: ComponentFixture<CandlisticChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandlisticChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandlisticChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
