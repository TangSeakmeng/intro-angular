import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: 'first', component: FirstComponentComponent },
  { path: 'second', component: SecondComponentComponent },
  { path: 'third', component: SecondComponentComponent },
  {
    path: 'firstm',
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectLoggedInToAccount },
    loadChildren: () => import(`./modules/first-module/first-module.module`).then(
      module => module.FirstModuleModule
    )
  },
  {
    path: 'fourthm',
    loadChildren: () => import(`./modules/fourth-module/fourth-module.module`).then(
      module => module.FourthModuleModule
    )
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
