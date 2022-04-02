import {Routes} from '@angular/router';
import {SignupComponent} from './shared/components/signup/signup.component';
import {ChartComponent} from './featureModules/charts/chart.component';
import {BarChartComponent} from './featureModules/charts/bar-chart/bar-chart.component';
import {LineChartComponent} from './featureModules/charts/line-chart/line-chart.component';
import {PieChartComponent} from './featureModules/charts/pie-chart/pie-chart.component';
import {SankyChartComponent} from './featureModules/charts/sanky-chart/sanky-chart.component';
import {ParallelGraphComponent} from './featureModules/charts/parallel-graph/parallel-graph.component';
import {ErrorBarsComponent} from './featureModules/charts/error-bars/error-bars.component';
import {PolarChartComponent} from './featureModules/charts/polar-chart/polar-chart.component';
import {RadarChartComponent} from './featureModules/charts/radar-chart/radar-chart.component';
import {HeatChartComponent} from './featureModules/charts/heat-chart/heat-chart.component';
import {BarChartPlotlyComponent} from './featureModules/charts/bar-chart-plotly/bar-chart-plotly.component';
import {WaterfallChartComponent} from './featureModules/charts/waterfall-chart/waterfall-chart.component';
import {CandlisticChartComponent} from './featureModules/charts/candlistic-chart/candlistic-chart.component';

export const appRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'chart/bar', component: BarChartComponent},
  {path: 'chart/line', component: LineChartComponent},
  {path: 'chart/pie', component: PieChartComponent},
  {path: 'chart/sanky', component: SankyChartComponent},
  {path: 'chart/para', component: ParallelGraphComponent},
  {path: 'chart/error', component: ErrorBarsComponent},
  {path: 'chart/polar', component: PolarChartComponent},
  {path: 'chart/radar', component: RadarChartComponent},
  {path: 'chart/heat', component: HeatChartComponent},
  {path: 'chart/bar-p', component: BarChartPlotlyComponent},
  {path: 'chart/waterfall', component: WaterfallChartComponent},
  {path: 'chart/candel', component: CandlisticChartComponent}
];
