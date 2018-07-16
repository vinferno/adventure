import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BeingsModule} from './beings/beings.module';
import {BeingBaseComponent} from './beings/being-base/being-base.component';
import {StageBaseComponent} from './stages/stage-base/stage-base.component';

const routes: Routes = [
  {
    path: 'stage',
    component: StageBaseComponent,
  },
  {
    path: '**',
    redirectTo: 'stage',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
