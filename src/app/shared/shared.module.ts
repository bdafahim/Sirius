import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkeletonComponent} from './components/skeleton/skeleton.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    SkeletonComponent,
    LandingPageComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SkeletonComponent
  ]
})
export class SharedModule { }
