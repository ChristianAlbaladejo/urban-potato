import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public products;
  constructor() { }

  ngOnInit() {
    this.products = history.state
  }

  getTotal() {
    var total = 0;
    for (let i = 0; i < this.products.products.length; i++) {
      total += parseFloat(this.products.products[i].pRCCOMPRA.replace(/,/, '.')) * this.products.products[i].quantity;
    }
    return total;
  }

  async remove(p){
    for (var i = 0; i < this.products.products.length; i++) {
      if (this.products.products[i].iD == p.iD) {
        this.products.products.splice(i, 1);
        await Storage.remove({ key: 'PRODUCTS' });
        Storage.set({ key: 'PRODUCTS', value: JSON.stringify(this.products.products) })
        break;
      }
    }
  }

}
