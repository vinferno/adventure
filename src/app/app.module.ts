import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BeingsModule} from './beings/beings.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {services} from './services/services';
import {StagesModule} from './stages/stages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BeingsModule,
    StagesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [services],
  bootstrap: [AppComponent]
})
export class AppModule { }
