import { Component, OnInit } from '@angular/core';
import { Faktura, FakturaDates, FakturaUsers } from '../faktura/faktura.component';


interface Options {
  value: number,
  title: string
}

export interface Items {
  count: number,
  unit: number,
  name: string,
  dph: number,
  price: number,
  priceall: number,
}
interface Price {
  WithoutDPH: number,
  WithDPH: number
}

@Component({
  selector: 'app-creatfaktura',
  templateUrl: './creatfaktura.component.html',
  styleUrls: ['./creatfaktura.component.scss']
})
export class CreatfakturaComponent implements OnInit {

  public Items: Items[] = [
    {
      count: 0,
      unit: 1, //idk
      name: "",
      dph: 0,
      price: 0,
      priceall: 0,
    }
  ]


  public DPH: boolean = true;

  public Price: number = 0;
  public PriceDPH: number = 0;





  public Faktura: Faktura = {
    Type: "",
    Payment: "",
    Dates: {
      Exposure: "0000-00-00",
      Zd: "0000-00-00",
      Validity: "0000-00-00"
    },
    UserOd: {
      Ico: "",
      Name: "",
      Street: "",
      City: "",
      Psc: "",
      Nation: ""
    },
    UserDo: {
      Ico: "",
      Name: "",
      Street: "",
      City: "",
      Psc: "",
      Nation: ""
    },
    Items: this.Items
  }





  constructor() { }

  ngOnInit(): void {


  }

  public InputDPH(e: any): void {
    this.DPH = (e.target.value === "true") ? true : false;
  }

  public AddItem(): void {
    this.Items.push({
      count: 0,
      unit: 1,
      name: "",
      dph: 0,
      price: 0,
      priceall: 0,
    });
  }


  public DeleteItems(e: Items): void {

    this.Items = this.Items.filter(
      item => item !== e
    );
  }

  public MathDPH(price: number, dph: number): number {
    var num1: number = price / 100;
    if (this.DPH) {
      var num2: number = Math.round(num1 * dph + +price);
      return num2;
    } else {
      return price;
    }
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








  public ItemsSetValues(e: Items): void {
    let value = this.MathDPH(e.price, e.dph);
    e.priceall = e.count * value;
    this.Price = this.ItemsGetAllPrice().WithoutDPH;
    this.PriceDPH = this.ItemsGetAllPrice().WithDPH;
  }

  public ItemsGetAllPrice(): Price {
    var WithoutDPH: number = 0;
    var WithDPH: number = 0;
    this.Items.forEach((e: Items) => {
      WithDPH += e.priceall;
      WithoutDPH += e.price;
    });
    return {
      WithoutDPH: WithoutDPH,
      WithDPH: WithDPH
    };
  }

  public LoadFaktura(): void {





  }




}