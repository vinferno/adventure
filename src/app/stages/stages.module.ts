import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StageBaseComponent } from './stage-base/stage-base.component';
import {BeingsModule} from '../beings/beings.module';

@NgModule({
  imports: [
    CommonModule,
    BeingsModule,
  ],
  declarations: [StageBaseComponent]
})
export class StagesModule { }
