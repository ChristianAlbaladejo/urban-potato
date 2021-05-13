import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const TOKEN_KEY = 'my-token';
const FIREBASE_TOKEN_KEY = 'my-token'
const USER = '';
const CODCLY = 'my-token';
const USUARIO = 'my-token';

@Injectable()
export class ApiService {
    public url: string;
    public identify;
    public stats;
    public token;
    constructor(public _http: HttpClient) {}

    async getProductsImages(images): Promise<Observable<any>> {
        this.token = await Storage.get({ key: TOKEN_KEY });
        this.token = JSON.parse(this.token.value)
        console.log("token" + this.token.Token);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': 'Bearer ' + this.token.Token,
        });

        return this._http.get('https://clouddemosjnc.dyndns.org:5002/DescargaDocumento/ObtenerImagenes?imagenes='+ '32,33', { headers: headers });
    }

    async getProductsTop(): Promise<Observable<any>>{
        this.token = await Storage.get({ key: TOKEN_KEY });
        this.token = JSON.parse(this.token.value)
        console.log("token" + this.token.Token);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + this.token.Token,
        });
        console.log(headers)

        return this._http.get('https://clouddemosjnc.dyndns.org:5002/consulta/articulo?campos=TOP (15) ARTALIAS ,CODART,ID ,DESCART ,PRCCOMPRA', { headers: headers });
    }

    async getInvoice(): Promise<Observable<any>> {
        this.token = await Storage.get({ key: TOKEN_KEY });
        this.token = JSON.parse(this.token.value)
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + this.token.Token,
        });
        console.log(this.token.CodCli)

        return this._http.get('https://clouddemosjnc.dyndns.org:5002/consulta/cabefacv?filtrar=codcli=' + this.token.CodCli + ' order by fECHA DESC', { headers: headers });
    }

    async getPdf(id): Promise<Observable<any>> {
        this.token = await Storage.get({ key: TOKEN_KEY });
        this.token = JSON.parse(this.token.value)
        console.log("token" + this.token.Token);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + this.token.Token,
        });
        console.log(headers)
        console.log(id)
        return this._http.get('https://clouddemosjnc.dyndns.org:5002/DescargaDocumento/LSTIMPRFACV/drive?parametros=identificador=' + id, { headers: headers });
    }

    async sendOrder(body): Promise<Observable<any>> {
        this.token = await Storage.get({ key: TOKEN_KEY });
        this.token = JSON.parse(this.token.value)
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': 'Bearer ' + this.token.Token,
        });
        console.log(body[0]);
        return this._http.post('https://clouddemosjnc.dyndns.org:5002/pedido/v',body, { headers: headers });
    }

    async sendFirebaseToken(): Promise<Observable<any>> {
        this.token = await Storage.get({ key: TOKEN_KEY });
        this.token = JSON.parse(this.token.value)
        console.log(this.token.value)
        let firebaseToken = localStorage.getItem('firebaseToken')
      /*   let tokenFirebase = await Storage.get({ key: FIREBASE_TOKEN_KEY });
        let usuario = await Storage.get({ key: USUARIO });
        let userCodCli = await Storage.get({ key: CODCLY }); */
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': 'Bearer ' + this.token.Token,
        });

        let body = [{
            "CodCli": this.token.CodCli.trim(),
            "Usuario": this.token.User,
            "TokenEnvio": firebaseToken,
        }]
        console.log(body)
        return this._http.post('https://clouddemosjnc.dyndns.org:5002/GuardaTokenEnvio',body ,{ headers: headers });
    }

    async getString(){
        let token = await Storage.get({ key: TOKEN_KEY });
        console.log(token.value);
        this.token = token.value;
        return token.value;
    }

    async setObject(key: string, value: any) {
        await Storage.set({ key, value: JSON.stringify(value) });
    }

    /* getTimeStamp() {
        var Xmas = new Date();
        console.log(Xmas)
        let date = new Date(Xmas.getFullYear() + "-" + ("0" + (Xmas.getMonth() + 1)).slice(-2) + "-" + ("0" + (Xmas.getDate())).slice(-2) + " " + ("0" + (Xmas.getHours())).slice(-2) + ":00:00").getTime() / 1000;
        console.log(date)
        let payload = ((Number(date) / ((Number(("0" + Xmas.getDate()).slice(-2)) * Number(Xmas.getFullYear())))) / (Number(("0" + (Xmas.getMonth() + 1)).slice(-2)) + 0.5)) * 1000000000000
        var output = [String(payload).slice(0, Xmas.getMonth() + 1), 'h', String(payload).slice(Xmas.getMonth() + 1)].join('');
        console.log(output);

        return String(output)
    } */
}