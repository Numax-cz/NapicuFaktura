import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakturaComponent } from './faktura/faktura.component';
import { CreatfakturaComponent } from './creatfaktura/creatfaktura.component';

@NgModule({
  declarations: [
    AppComponent,
    FakturaComponent,
    CreatfakturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
