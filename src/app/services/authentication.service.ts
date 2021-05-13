import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

const TOKEN_KEY = 'my-token';
const CODCLY = 'my-token';
const USUARIO = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';

  constructor(private http: HttpClient) {
    this.loadToken();
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(credentials: { email, password }): Observable<any> {
    let user = [{
      "USUARIO": credentials.email,
      "CONTRASEÑA": credentials.password,
    }]
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
  
    return this.http.post(`https://clouddemosjnc.dyndns.org:5002/login`, user, { headers: headers }).pipe(
      map((data: any) => data),
      switchMap(token => {
        console.log("token" +token)
        token['User'] = credentials.email
        return from(Storage.set({ key: TOKEN_KEY, value: JSON.stringify(token) }));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    ) 
  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Storage.remove({ key: TOKEN_KEY });
  }

/*   getTimeStamp(){
    var Xmas = new Date();
    let date = new Date(Xmas.getFullYear() + "-" + ("0" + (Xmas.getMonth() + 1)).slice(-2) + "-" + ("0" + (Xmas.getDate())).slice(-2) + " " + ("0" + (Xmas.getHours())).slice(-2) +":00:00").getTime() / 1000;
    let payload = ((Number(date) / ((Number(("0" + Xmas.getDate()).slice(-2)) * Number(Xmas.getFullYear())))) / (Number(("0" + (Xmas.getMonth() + 1)).slice(-2)) + 0.5)) * 1000000000000
    var output = [String(payload).slice(0, Xmas.getMonth() + 1), 'h', String(payload).slice(Xmas.getMonth() + 1)].join('');
    console.log(output);

    return String(output)
    } */
}