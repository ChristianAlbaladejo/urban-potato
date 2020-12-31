import { Component, OnInit } from '@angular/core';

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
    console.log(this.products)
    
  }

  getTotal(){
    var total = 0;
    for (let i = 0; i < this.products.products.length; i++) {
      console.log(this.products.products[i].pRCCOMPRA)
      total += parseFloat(this.products.products[i].pRCCOMPRA.replace(/,/, '.'));
    }
    return  total;
  }

}
