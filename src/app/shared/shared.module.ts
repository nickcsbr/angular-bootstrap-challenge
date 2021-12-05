import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorComponent } from './input-error/input-error.component';
import { CommonPageComponent } from './common-page/common-page.component';


@NgModule({
  declarations: [
    InputErrorComponent,
    CommonPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputErrorComponent,
    CommonPageComponent
  ]
})
export class SharedModule { }
