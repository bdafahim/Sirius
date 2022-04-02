import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SkeletonComponent} from './components/skeleton/skeleton.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './components/landing-page/navbar/navbar.component';
import {FooterComponent} from './components/landing-page/footer/footer.component';
import {RouterModule} from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';



@NgModule({
  declarations: [
    SkeletonComponent,
    LandingPageComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    SkeletonComponent
  ]
})
export class SharedModule { }
