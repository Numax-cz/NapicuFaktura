import { Component, Input } from '@angular/core';
import { Items } from '../creatfaktura/creatfaktura.component';

export interface FakturaDates {
  Exposure: string,
  Zd: string,
  Validity: string
}

export interface FakturaUsers {
  Ico: string,
  Dic: string,
  Name: string,
  Street: string,
  City: string,
  Psc: string,
  Nation: string
}

export interface Faktura {
  Title: string,
  Type: string,
  Payment: string,
  Dates: FakturaDates,
  UserOd: FakturaUsers,
  UserDo: FakturaUsers,
  Items: Items[],
  Price: number,
  PriceDPH: number
}

@Component({
  selector: 'app-faktura',
  templateUrl: './faktura.component.html',
  styleUrls: ['./faktura.component.scss']
})
export class FakturaComponent {
  @Input() data: Faktura | undefined;
  constructor() { }
}