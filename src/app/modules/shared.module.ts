import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from '../components/first-component/first-component.component';
import { SecondComponentComponent } from '../components/second-component/second-component.component';
import { ThirdComponentComponent } from '../components/third-component/third-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ThirdComponentComponent,
    FirstComponentComponent,
    SecondComponentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    ThirdComponentComponent,
    FirstComponentComponent,
    SecondComponentComponent,
  ]
})
export class SharedModule { }
