import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.page.html',
  styleUrls: ['./facturas.page.scss'],
  providers: [ApiService]
})
export class FacturasPage implements OnInit {

  constructor(
    private apiService: ApiService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async getPdf(id){
    console.log(id)
    const loading = await this.loadingController.create({
      message: 'Cargando...',
      translucent: true,
    });
    await loading.present();
    (await this.apiService.getPdf(id)).subscribe(
      (response) => {
        console.log(response);
        this.loadingController.dismiss();
        window.open(response.url)
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

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

}
