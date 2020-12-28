import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment'
import { ActionSheetController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  providers: [ApiService]
})
export class FolderPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, private apiService: ApiService, public loadingController: LoadingController, public alertController: AlertController) { }

  ngOnInit() {
    this.load();
  }

  async load(){
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      translucent: true,
    });
    await loading.present();
    (await this.apiService.getProductsImages()).subscribe(
      (response) => {
        console.log(response);
        this.loadingController.dismiss();
      }, async (error) => {
        console.log(error)
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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Producto',
      buttons: [ {
        text: 'Añadir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
          text: 'Eliminar de la lista',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
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
