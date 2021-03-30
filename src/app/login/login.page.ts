import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { RecoverPage } from '../recover/recover.page'
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    public menuCtrl: MenuController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['usuario'],
      password: ['password'],
    });
  }

  ionViewDidEnter(): void {
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave(): void {
    this.menuCtrl.enable(true);
  }
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.credentials.value).subscribe(
      async (res) => {
        console.log(res)
        await loading.dismiss();
        this.router.navigateByUrl('/folder/Inbox', { replaceUrl: true });
      },
      async (res) => {
        console.log(res)
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Parece que tenemos problemas',
          buttons: ['OK'],
        });

        await alert.present();
      }
    );
  }

  async recover() {
    const modal = await this.modalController.create({
      component: RecoverPage,
    });
    return await modal.present();
  }

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }
}