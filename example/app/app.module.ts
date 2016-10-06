import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RepoNameModule } from '../../src/index';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RepoNameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
