import { Component, OnInit } from '@angular/core';


interface Options {
  value: number,
  title: string
}

interface Items {
  count: number,
  unit: number,
  name: string,
  dph: number,
  price: number,
  priceall: number,
}

@Component({
  selector: 'app-creatfaktura',
  templateUrl: './creatfaktura.component.html',
  styleUrls: ['./creatfaktura.component.scss']
})
export class CreatfakturaComponent implements OnInit {
  public DPH: boolean = true;

  //idk
  public Price: number = 0;
  public PriceDPH: number = 0;
  public DPHValue: number = 0;
  //idk

  public readonly ItemsTemplate: Items = {
    count: 0,
    unit: 0, //idk
    name: "",
    dph: 0,
    price: 0,
    priceall: 0,
  }




  constructor() { }

  ngOnInit(): void {
    this.Items.push(this.ItemsTemplate);
  }

  public InputDPH(e: any): void {
    this.DPH = (e.target.value === "true") ? true : false;
  }

  public AddItem(): void {
    this.Items.push(this.ItemsTemplate);
    console.log(this.Items);
  }




  public MathDPH(price: number, dph: number): number {
    var num1: number = price / 100;
    var num2: number = Math.round(num1 * dph + +price);
    return num2;
  }









  public OptionDPH: Options[] = [
    {
      value: 0,
      title: "0%"
    },
    {
      value: 10,
      title: "10%"
    },
    {
      value: 15,
      title: "15%"
    },
    {
      value: 21,
      title: "21%"
    },
  ]

  public OptionItems: Options[] = [
    {
      value: 1,
      title: "Ks"
    },
    {
      value: 2,
      title: "Litr"
    },
    {
      value: 3,
      title: "Kg"
    },
    {
      value: 4,
      title: "Km"
    },
    {
      value: 5,
      title: "Služba"
    },
    {
      value: 6,
      title: "Balení"
    }
  ]

  public Items: Items[] = []



  public ItemsCount(e: any): void {
    console.log(e);
  }

  public ItemsMj(e: Event): void {


  }

  public ItemsName(e: Event): void {

  }

  public ItemsDPH(e: Event): void {

  }

  public ItemsPrice(e: Event): void {

  }

}
