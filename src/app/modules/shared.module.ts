import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from '../components/first-component/first-component.component';
import { SecondComponentComponent } from '../components/second-component/second-component.component';
import { ThirdComponentComponent } from '../components/third-component/third-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ThirdComponentComponent,
    FirstComponentComponent,
    SecondComponentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    ThirdComponentComponent,
    FirstComponentComponent,
    SecondComponentComponent,
  ]
})
export class SharedModule { }
