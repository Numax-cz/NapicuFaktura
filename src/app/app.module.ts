import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakturaComponent } from './faktura/faktura.component';
import { CreatfakturaComponent } from './creatfaktura/creatfaktura.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MobileGuard } from './mobile.guard';
import { MobileComponent } from './error/mobile/mobile.component';


const routes: Routes = [
  { path: '', component: MainpageComponent, canActivate: [MobileGuard] },
  { path: 'creat', component: CreatfakturaComponent, canActivate: [MobileGuard] },
  { path: '**', component: MainpageComponent, canActivate: [MobileGuard] },
  { path: 'phone-error', component: MobileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FakturaComponent,
    CreatfakturaComponent,

    MainpageComponent,
    HtmltopdfComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
