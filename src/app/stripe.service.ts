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

  constructor(private http: HttpClient) { }

  async charge(cantidad, tokenId){
    let token = await Storage.get({ key: TOKEN_KEY });
    console.log(token.value);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8"',
      'Authorization': 'Bearer ' + token.value
    });
    return this.http.post('http://192.168.200.234:5001/PagoStripe', {
      stripeToken: tokenId,
      cantidad: cantidad,
      Token: this.getTimeStamp()
    }, { headers: headers }).toPromise();
  }


  getTimeStamp() {
    var Xmas = new Date();
    let date = new Date(Xmas.getFullYear() + "-" + ("0" + (Xmas.getMonth() + 1)).slice(-2) + "-" + ("0" + (Xmas.getDate())).slice(-2) + " " + ("0" + (Xmas.getHours())).slice(-2) + ":00:00").getTime() / 1000;
    let payload = ((Number(date) / ((Number(("0" + Xmas.getDate()).slice(-2)) * Number(Xmas.getFullYear())))) / (Number(("0" + (Xmas.getMonth() + 1)).slice(-2)) + 0.5)) * 1000000000000
    var output = [String(payload).slice(0, Xmas.getMonth() + 1), 'h', String(payload).slice(Xmas.getMonth() + 1)].join('');
    console.log(output);

    return String(output)
  }
}
