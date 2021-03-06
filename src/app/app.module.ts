import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SharedModule } from './modules/shared.module';
import { MobxAngularModule } from 'mobx-angular';
import { AppStore } from './stores/app.store';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MobxAngularModule,
  ],
  providers: [AppStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
