import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Policy } from './Policy';

@Injectable()
export class UserpageService {
  headers: Headers;
  options: RequestOptions;
    constructor(public model: Policy, private http: Http) {}

    logout():Observable<any>{
      this.headers = new Headers({ 'Content-Type': 'application/json' });
      this.headers.append('Authorization', 'Basic ' + localStorage.getItem('Authorization'));
      //console.log(this.headers);
      let options1 = new RequestOptions({ headers: this.headers });
    //  let body;
      return this.http.get('http://localhost:8080/JerseyDemos/rest/auth/logout',  options1)
          .map((response: Response) => response.json());
    }

    getPolicies():Observable<any>{
      this.headers = new Headers({ 'Content-Type': 'application/json' });
     this.headers.append('Authorization', 'Basic ' + localStorage.getItem('Authorization'));
    this.options = new RequestOptions({ headers: this.headers });

      return this.http.get('http://localhost:8080/JerseyDemos/rest/policy/all', this.options)
          .map((response: Response) => response.json());
    }

    saveEditItem(model: Policy):Observable<any>{
      this.headers = new Headers({ 'Content-Type': 'application/json' });
       this.options = new RequestOptions({ headers: this.headers });
      let body = JSON.stringify(model);
      return this.http.post('http://localhost:8080/JerseyDemos/rest/policy/edit', body, this.options)
          .map((response: Response) => response.json());
    }
}
