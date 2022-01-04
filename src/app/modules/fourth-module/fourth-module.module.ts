import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourthModuleRoutingModule } from './fourth-module-routing.module';
import { FourthmFirstcComponent } from './components/fourthm-firstc/fourthm-firstc.component';
import { FourthmSecondcComponent } from './components/fourthm-secondc/fourthm-secondc.component';


@NgModule({
  declarations: [
    FourthmFirstcComponent,
    FourthmSecondcComponent
  ],
  imports: [
    CommonModule,
    FourthModuleRoutingModule
  ]
})
export class FourthModuleModule { }
