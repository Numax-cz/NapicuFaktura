import { Component, OnInit } from '@angular/core';
import { Faktura } from '../faktura/faktura.component';

export interface Items {
  count: number;
  unit: string;
  name: string;
  dph: number;
  price: number;
  priceall: number;
}
interface Options {
  value: number;
  title: string;
}
interface Price {
  WithoutDPH: number;
  WithDPH: number;
}

@Component({
  selector: 'app-creatfaktura',
  templateUrl: './creatfaktura.component.html',
  styleUrls: ['./creatfaktura.component.scss'],
})
export class CreatfakturaComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  public Items: Items[] = [
    {
      count: 0,
      unit: 'Ks',
      name: '',
      dph: 0,
      price: 0,
      priceall: 0,
    },
  ];
  public OptionDPH: Options[] = [
    {
      value: 0,
      title: '0%',
    },
    {
      value: 10,
      title: '10%',
    },
    {
      value: 15,
      title: '15%',
    },
    {
      value: 21,
      title: '21%',
    },
  ];

  public OptionItems: Options[] = [
    {
      value: 1,
      title: 'Ks',
    },
    {
      value: 2,
      title: 'Litr',
    },
    {
      value: 3,
      title: 'Kg',
    },
    {
      value: 4,
      title: 'Km',
    },
    {
      value: 5,
      title: 'Služba',
    },
    {
      value: 6,
      title: 'Balení',
    },
  ];

  public OptionPay: Options[] = [
    {
      value: 1,
      title: 'Hotově',
    },
    {
      value: 2,
      title: 'Kartou',
    },
    {
      value: 3,
      title: 'Bankovní převod',
    },
    {
      value: 4,
      title: 'PayPal',
    },
  ];

  public OptionDPHA: Options[] = [
    {
      value: 1,
      title: 'S DPH',
    },
    {
      value: 1,
      title: 'Bez DPH',
    },
  ];

  public DPH: boolean = true;
  public Price: number = 0;
  public PriceDPH: number = 0;

  public Faktura: Faktura = {
    Title: 'NapicuFaktura',
    Type: 'S DPH',
    Payment: 'Hotově',
    Dates: {
      Exposure: '0000-00-00',
      Zd: '0000-00-00',
      Validity: '0000-00-00',
    },
    UserOd: {
      Ico: '',
      Dic: '',
      Name: '',
      Street: '',
      City: '',
      Psc: '',
      Nation: '',
    },
    UserDo: {
      Ico: '',
      Dic: '',
      Name: '',
      Street: '',
      City: '',
      Psc: '',
      Nation: '',
    },
    Items: this.Items,
    Price: this.Price,
    PriceDPH: this.PriceDPH,
  };

  public AddItem(): void {
    this.Items.push({
      count: 0,
      unit: 'Ks',
      name: '',
      dph: 0,
      price: 0,
      priceall: 0,
    });
  }

  public UpdateGlobalData(): void {
    this.Faktura.Items = this.Items;
    this.Faktura.Price = this.Price;
    this.Faktura.PriceDPH = this.PriceDPH;
  }

  public DeleteItems(e: Items): void {
    this.Items = this.Items.filter((item) => item !== e);
    this.UpdateGlobalData();
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

  public ItemsSetValues(e: Items): void {
    let value = this.MathDPH(e.price, e.dph);
    e.priceall = e.count * value;
    this.Price = this.ItemsGetAllPrice().WithoutDPH;
    this.PriceDPH = this.ItemsGetAllPrice().WithDPH;
    this.UpdateGlobalData();
  }

  public ItemsNumber(e: any): void {
    if (
      (e.keyCode != 8 && e.keyCode != 0 && e.keyCode < 48) ||
      e.keyCode > 57 ||
      (e.keyCode < 98 && e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  }

  public ItemsGetAllPrice(): Price {
    var WithoutDPH: number = 0;
    var WithDPH: number = 0;
    this.Items.forEach((e: Items) => {
      WithDPH += e.priceall;
      WithoutDPH += e.price * e.count;
    });
    return {
      WithoutDPH: WithoutDPH,
      WithDPH: WithDPH,
    };
  }
}
