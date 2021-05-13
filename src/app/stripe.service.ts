import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const TOKEN_KEY = 'my-token';
const USER = '';
@Injectable({
  providedIn: 'root'
})
export class StripeService {
  public token;

  constructor(private http: HttpClient) { }

  async charge(cantidad, tokenId) {
    this.token = await Storage.get({ key: TOKEN_KEY });
    this.token = JSON.parse(this.token.value)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': 'Bearer ' + this.token.Token
    });
    return this.http.post('https://clouddemosjnc.dyndns.org:5002/PagoStripe', {
      stripeToken: tokenId,
      cantidad: cantidad * 100,
    }, { headers: headers }).toPromise();
  }
}
