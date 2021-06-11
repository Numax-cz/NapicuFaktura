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

  public DPH: boolean = true;

  //idk
  public Price: number = 0;
  public PriceDPH: number = 0;
  public DPHValue: number = 0;
  //idk

  public ItemsTemplate: Items = {
    count: 0,
    unit: 0, //idk
    name: "",
    dph: 0,
    price: 0,
    priceall: 0,
  }





  constructor() { }

  ngOnInit(): void {
    //  this.Items.push(this.ItemsTemplate);
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

  public Items: Items[] = [
    {
      count: 10,
      unit: 1, //idk
      name: "",
      dph: 0,
      price: 0,
      priceall: 0,
    },
    {
      count: 0,
      unit: 1, //idk
      name: "",
      dph: 0,
      price: 0,
      priceall: 0,
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





}