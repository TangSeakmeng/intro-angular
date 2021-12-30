import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { FirstmFirstcComponent } from './components/firstm-firstc/firstm-firstc.component';
import { FirstmSecondcComponent } from './components/firstm-secondc/firstm-secondc.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    FirstmFirstcComponent,
    FirstmSecondcComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FirstModuleRoutingModule
  ],
  exports: [
    FirstmSecondcComponent
  ]
})
export class FirstModuleModule { }
