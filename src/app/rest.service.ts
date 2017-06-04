import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestService {

    constructor(private http: Http) { }

    loginApiResponse = "";
    isSuccess: boolean = false;
    isError: boolean = false;

    // http:Http;
    headers: Headers = new Headers({ 'Content-Type': 'application/json' });

    postJson(url: string, data: any) { //: Observable<Response> {
        //   alert('inside postJson fxn...');
        return this.http.post(
            url,
            data,
            { headers: this.headers }
        );
    }



}