import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  providers: [ApiService]
})
export class FolderPage implements OnInit {
  public artTop;
  public products = [];
  constructor(
    public actionSheetController: ActionSheetController,
    private apiService: ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private authService: AuthenticationService,
    private router: Router) { }

  async ngOnInit() {
    let token = await Storage.get({ key: 'PRODUCTS' });
    this.products = JSON.parse(token.value);
    console.log(this.products)
    this.load();
  }

  async load() {
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      translucent: true,
    });
    await loading.present();
    (await this.apiService.getProductsTop()).subscribe(
      (response) => {
        console.log(response);
        this.artTop = response;
        this.loadImages()
      }, async (error) => {
        console.log(error)
        if (error.status === 401) {
          this.logout();
          this.loadingController.dismiss();
        }
        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: 'Parece que hay problemas ',
          buttons: ['OK']
        });
        await alert.present();
      }
    )
  }

  async loadImages() {
    (await this.apiService.getProductsImages()).subscribe(
      (response) => {
        console.log(response);
        this.loadingController.dismiss();
      }, async (error) => {
        console.log(error)
        if (error.status === 401) {
          this.logout();
        }
        this.loadingController.dismiss();
        const alert = await this.alertController.create({
          header: 'Error',
          subHeader: 'Parece que hay problemas ',
          buttons: ['OK']
        });
        await alert.present();
      }
    )
  }

  async presentActionSheet(product) {
    let flag = false;
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].iD == product.iD) {
        flag = true;
        break;
      }
    }
    if (flag){
    const actionSheet = await this.actionSheetController.create({
      header: product.aRTALIAS,
      buttons: [{
        text: 'Añadir',
        icon: 'share',
        handler: () => {
          this.products.push(product)
          Storage.set({ key: 'PRODUCTS', value: JSON.stringify(this.products) })
        }
      }, {
        text: 'Eliminar de la lista',
        role: 'destructive',
        icon: 'trash',
        handler: async () => {
          for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].iD == product.iD) {
              this.products.splice(i, 1);
              await Storage.remove({ key: 'PRODUCTS' });
              Storage.set({ key: 'PRODUCTS', value: JSON.stringify(this.products) })
              break;
            }
          }
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }else {
      const actionSheet = await this.actionSheetController.create({
        header: product.aRTALIAS,
        buttons: [{
          text: 'Añadir',
          icon: 'share',
          handler: () => {
            this.products.push(product)
            Storage.set({ key: 'PRODUCTS', value: JSON.stringify(this.products) })
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
  }
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}
