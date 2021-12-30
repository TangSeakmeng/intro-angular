import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstmFirstcComponent } from './components/firstm-firstc/firstm-firstc.component';

const routes: Routes = [
  { path: 'firstc', component: FirstmFirstcComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule { }
