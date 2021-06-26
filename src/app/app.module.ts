import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakturaComponent } from './faktura/faktura.component';
import { CreatfakturaComponent } from './creatfaktura/creatfaktura.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';



@NgModule({
  declarations: [
    AppComponent,
    FakturaComponent,
    CreatfakturaComponent,
    MainpageComponent,
    HtmltopdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
