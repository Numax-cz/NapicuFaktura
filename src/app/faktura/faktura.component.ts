import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatfakturaComponent, Items } from '../creatfaktura/creatfaktura.component';

export interface FakturaDates {
  Exposure: HTMLDataElement,
  Zd: HTMLDataElement,
  Validity: HTMLDataElement
}

export interface FakturaUsers {
  Ico: number,
  Name: string,
  Street: string,
  City: string,
  Psc: string,
  Nation: string
}

export interface Faktura {
  Type: string,
  Payment: string,
  Dates: Array<FakturaDates>,
  UserOd: Array<FakturaUsers>,
  UserDo: Array<FakturaUsers>,
  Items: Items[]
}


@Component({
  selector: 'app-faktura',
  templateUrl: './faktura.component.html',
  styleUrls: ['./faktura.component.scss']
})
export class FakturaComponent implements OnInit {

  @Input() data: Array<Faktura> = [
    {

    }
  ];

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.data);

  }

}
