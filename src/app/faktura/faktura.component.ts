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
  Items: Items[]
}


@Component({
  selector: 'app-faktura',
  templateUrl: './faktura.component.html',
  styleUrls: ['./faktura.component.scss']
})
export class FakturaComponent implements OnInit {

  @Input() data: Faktura | undefined;

  constructor() {

  }

  ngOnInit(): void { }


  get Type(): string{
    
    

    return "";
  }

}
