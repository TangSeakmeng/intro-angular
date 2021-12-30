import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FirstModuleModule } from '../first-module/first-module.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FirstModuleModule,
    SecondModuleRoutingModule
  ]
})
export class SecondModuleModule { }
