import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Policy } from './Policy';

@Injectable()
export class UserpageService {

  headers: Headers;
  options: RequestOptions;

  constructor(private model: Policy, private http: Http) {}

  logout():Observable<any>{
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append('Authorization', 'Basic ' + localStorage.getItem('Authorization'));
    this.options = new RequestOptions({ headers: this.headers });

    return this.http.get('/JerseyDemos/rest/auth/logout',  this.options)
    .map((response: Response) => response.json())
    .catch((err:any) => return Observable.throw(err.json()););
  }

  getPolicies():Observable<any>{
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append('Authorization', 'Basic ' + localStorage.getItem('Authorization'));
    this.options = new RequestOptions({ headers: this.headers });

    return this.http.get('/JerseyDemos/rest/policy/all', this.options)
    .map((response: Response) => response.json())
    .catch((err:any) => return Observable.throw(err.json()););
  }

  getUserPolicies():Observable<any>{
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append('Authorization', 'Basic ' + localStorage.getItem('Authorization'));
    this.options = new RequestOptions({ headers: this.headers });

    return this.http.get('/JerseyDemos/rest/policy/query', this.options)
    .map((response: Response) => response.json())
    .catch((err:any) => return Observable.throw(err.json()););
  }

  saveEditItem(model:Policy):Observable<any>{
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append('Authorization', 'Basic ' + localStorage.getItem('Authorization'));
    this.options = new RequestOptions({ headers: this.headers });
    let body = JSON.stringify(model);
    return this.http.post('/JerseyDemos/rest/policy/edit', body, this.options)
    .map((response: Response) => response.json())
    .catch((err:any) => return Observable.throw(err.json()););
  }
}
