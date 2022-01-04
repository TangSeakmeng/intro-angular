import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourthmFirstcComponent } from './components/fourthm-firstc/fourthm-firstc.component';
import { FourthmSecondcComponent } from './components/fourthm-secondc/fourthm-secondc.component';

const routes: Routes = [
  { path: 'firstc', component: FourthmFirstcComponent },
  { path: 'seconds', component: FourthmSecondcComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourthModuleRoutingModule { }
