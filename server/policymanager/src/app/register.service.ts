import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from './User';

@Injectable()
export class RegistrationService {

  headers: Headers;
  options: RequestOptions;

  constructor(public model: User, private http: Http) {}

  register(model: User): Observable<any> {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
    let body = JSON.stringify(model);
    return this.http.post('/JerseyDemos/rest/user/add', body, this.options)
    .map((response: Response) => response.json())
     .catch((err:any) => { return Observable.throw(err.json()) });  
   }
}
