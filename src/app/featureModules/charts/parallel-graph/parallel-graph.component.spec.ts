import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelGraphComponent } from './parallel-graph.component';

describe('ParallelGraphComponent', () => {
  let component: ParallelGraphComponent;
  let fixture: ComponentFixture<ParallelGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallelGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
