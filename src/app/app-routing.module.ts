import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatfakturaComponent } from './creatfaktura/creatfaktura.component';
import { FakturaComponent } from './faktura/faktura.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path: '', component: MainpageComponent, pathMatch: 'full' },
  { path: 'creat', component: CreatfakturaComponent },
  { path: '**', component: MainpageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
