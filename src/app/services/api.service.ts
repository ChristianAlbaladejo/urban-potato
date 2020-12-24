import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductsService {
    public url: string;
    public identify;
    public stats;

    constructor(public _http: HttpClient) {}

    getProducts(): Observable<any> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=UTF-8"',
        });

        return this._http.get(environment.apiUrl + '/consulta/articulo', { headers: headers });
    }
}