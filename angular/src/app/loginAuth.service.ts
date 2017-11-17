import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserLogin } from './UserLogin';

@Injectable()
export class LoginAuthenticationService {

  headers: Headers;
  options: RequestOptions;

  constructor(private model:UserLogin, private http: Http) {}

  login(model:UserLogin): Observable<any> {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append("Accept" , 'application/json');
    this.options = new RequestOptions({ headers: this.headers });
    let body = JSON.stringify(model);
    return this.http.post('http://localhost:8080/JerseyDemos/rest/auth/login', body, this.options).map((response: Response) => response.json());
  }
}
