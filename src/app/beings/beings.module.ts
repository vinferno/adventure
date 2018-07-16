import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeingBaseComponent } from './being-base/being-base.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BeingBaseComponent],
  exports: [BeingBaseComponent]
})
export class BeingsModule { }
