import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakturaComponent } from './faktura/faktura.component';
import { CreatfakturaComponent } from './creatfaktura/creatfaktura.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', component: CreatfakturaComponent },
  { path: '**', component: CreatfakturaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FakturaComponent,
    CreatfakturaComponent,
    HtmltopdfComponent,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
