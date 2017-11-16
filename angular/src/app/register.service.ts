import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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
      //var creds = 'firstname=' + model.firstname + '&lastname='+model.lastname + '&dateofbirth='+model.dateofbirth + '&address='+model.address + '&contactno='+model.contactno + '&email='+model.email + '&password='+model.password + '&confirmPassword='+model.confirmPassword;
      //headers.append('Content-Type', 'application/json');
      return this.http.post('http://localhost:8080/JerseyDemos/rest/user/add', body, this.options)
        .map((response: Response) => response.json());
    }
}
