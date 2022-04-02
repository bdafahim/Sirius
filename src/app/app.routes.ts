import {Routes} from '@angular/router';
import {SignupComponent} from './shared/components/signup/signup.component';
import {ChartComponent} from './featureModules/charts/chart.component';
import {BarChartComponent} from './featureModules/charts/bar-chart/bar-chart.component';
import {LineChartComponent} from './featureModules/charts/line-chart/line-chart.component';
import {PieChartComponent} from './featureModules/charts/pie-chart/pie-chart.component';

export const appRoutes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'chart/bar', component: BarChartComponent},
  {path: 'chart/line', component: LineChartComponent},
  {path: 'chart/pie', component: PieChartComponent}
];
