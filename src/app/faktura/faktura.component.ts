import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatfakturaComponent, Items } from '../creatfaktura/creatfaktura.component';

export interface FakturaDates {
  Exposure: string,
  Zd: string,
  Validity: string
}

export interface FakturaUsers {
  Ico: string,
  Name: string,
  Street: string,
  City: string,
  Psc: string,
  Nation: string
}

export interface Faktura {
  Type: string,
  Payment: string,
  Dates: FakturaDates,
  UserOd: FakturaUsers,
  UserDo: FakturaUsers,
  Items: Items[]
}


@Component({
  selector: 'app-faktura',
  templateUrl: './faktura.component.html',
  styleUrls: ['./faktura.component.scss']
})
export class FakturaComponent implements OnInit {

  // @Input() data: Faktura = {
  //   Type: "S DPH",
  //   Payment: "Hotově",
  //   Dates: {


  //   }
  // }

  constructor() {

  }

  ngOnInit(): void {
    // console.log(this.data);

  }

}
