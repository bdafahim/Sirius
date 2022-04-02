import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {SharedModule} from './shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {ChartsModule} from 'ng2-charts';
import {FeatureChartsModule} from './featureModules/charts/charts.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    SharedModule,
    FeatureChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
