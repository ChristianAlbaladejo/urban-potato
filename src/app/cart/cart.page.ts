import { StripeService } from './../stripe.service';
import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

const { Storage } = Plugins;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  providers: [ApiService]
})
export class CartPage implements OnInit {
  @ViewChild('cardInfo') cardInfo: ElementRef;
  cardError: string;
  card: any;


  public products;
  constructor(
    private apiService: ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private authService: AuthenticationService,
    private router: Router,
    private ngZone: NgZone,
    private stripeService: StripeService) { }

  ngAfterViewInit() {
      this.card = elements.create('card');
      this.card.mount(this.cardInfo.nativeElement);
      this.card.addEventListener('change', this.onChange.bind(this))
  }

  ngOnDestroy() {
    elements._elements = []
  }

  onChange({ error }) {
    if (error) {
      this.ngZone.run(() => this.cardError = error.message);
    } else {
      this.ngZone.run(() => this.cardError = null);
    }
  }
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

  async remove(p) {
    for (var i = 0; i < this.products.products.length; i++) {
      if (this.products.products[i].iD == p.iD) {
        this.products.products.splice(i, 1);
        await Storage.remove({ key: 'PRODUCTS' });
        Storage.set({ key: 'PRODUCTS', value: JSON.stringify(this.products.products) })
        break;
      }
    }
  }

  async sendOrder() {
    const { token, error } = await stripe.createToken(this.card);
    if (token) {
      await this.stripeService.charge(100, token.id)
    } else {
      this.ngZone.run(() => this.cardError = error.message);
    }


    /* const loading = await this.loadingController.create({
      message: 'Cargando...',
      translucent: true,
    });
    await loading.present();
    let lines = [];
    for (let i = 0; i <  this.products.products.length; i++) {
      lines.push(this.products.products)
      lines
      
    }
    let order = [{ 
      "FECHA": "01/09/2020", 
      "CODCLI": "1", 
      "CODALM": "1", 
      "ESTADO": "AC", 
      "FECENTREGA": "02/09/2020", 
      "SITUACION": "A", 
      "lineas": [{ lines
         }] 
        }];
    (await this.apiService.sendOrder(order)).subscribe(
      (response) => {
        console.log(response);
        
      }, async (error) => {
        console.log(error)
        if (error.status === 401) {
          this.logout();
          this.loadingController.dismiss();
        } else {
          const alert = await this.alertController.create({
            header: 'Error',
            subHeader: 'Parece que hay problemas',
            buttons: ['OK']
          });
          await alert.present();
        }
      }
    ) */
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}
