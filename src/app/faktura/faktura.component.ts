import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Items } from '../creatfaktura/creatfaktura.component';


import jspdf from 'jspdf';
import html2canvas from 'html2canvas';



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
export class FakturaComponent implements OnInit {



  public DataDe: Faktura = {
    Title: "NapicuFaktura",
    Type: "S DPH",
    Payment: "Hotově",
    Dates: {
      Exposure: "0000-00-00",
      Zd: "0000-00-00",
      Validity: "0000-00-00"
    },
    UserOd: {
      Ico: "",
      Dic: "",
      Name: "",
      Street: "",
      City: "",
      Psc: "",
      Nation: ""
    },
    UserDo: {
      Ico: "",
      Dic: "",
      Name: "",
      Street: "",
      City: "",
      Psc: "",
      Nation: ""
    },
    Items: [],
    Price: 0,
    PriceDPH: 0
  }

  @Input() data: Faktura | undefined = this.DataDe;





  constructor() {

  }


  ngOnInit(): void {

  }




}