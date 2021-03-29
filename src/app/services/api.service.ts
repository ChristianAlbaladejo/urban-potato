import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
const TOKEN_KEY = 'my-token';
const USER = '';

@Injectable()
export class ApiService {
    public url: string;
    public identify;
    public stats;
    public token;
    constructor(public _http: HttpClient) {}

    async getProductsImages(): Promise<Observable<any>> {
        let token = await Storage.get({ key: TOKEN_KEY });
        console.log(token.value);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': 'Bearer ' +  token.value
        });

        return this._http.get('https://clouddemosjnc.dyndns.org:5001/DescargaDocumento/ObtenerImagenes?imagenes=79', { headers: headers });
    }

    async getProductsTop(): Promise<Observable<any>>{
        let token = await Storage.get({ key: TOKEN_KEY });
        console.log(token.value);
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': 'Bearer ' + token.value
        });

        return this._http.get('https://clouddemosjnc.dyndns.org:5001/consulta/articulo?campos=TOP (15) ARTALIAS ,CODART,ID ,DESCART ,PRCCOMPRA', { headers: headers });
    }

    async getInvoice(): Promise<Observable<any>> {
        let token = await Storage.get({ key: TOKEN_KEY });
        let user = await Storage.get({ key: USER });
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': 'Bearer ' + token.value
        });

        return this._http.get('https//clouddemosjnc.dyndns.org:5001/consulta/cabefacv?filtar=codcli='+ user.value, { headers: headers });
    }

    async getPdf(id): Promise<Observable<any>> {
        let token = await Storage.get({ key: TOKEN_KEY });
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': 'Bearer ' + token.value
        });

        return this._http.get('https://clouddemosjnc.dyndns.org:5001/DescargaDocumento/LSTIMPRALBV/drive?parametros=identificador=' + id, { headers: headers });
    }

    async sendOrder(body): Promise<Observable<any>> {
        let token = await Storage.get({ key: TOKEN_KEY });
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8"',
            'Authorization': 'Bearer ' + token.value
        });
        console.log(body);
        return this._http.post('https://clouddemosjnc.dyndns.org:5001/pedido',body, { headers: headers });
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

    getTimeStamp(){
        let date = Date.now()
        return date
    }
}