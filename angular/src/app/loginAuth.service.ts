import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginAuthenticationService {
  headers: Headers;
  options: RequestOptions;
private getURL = "http://localhost:8080/RESTfulExample/rest/hello/gopi";
    constructor(private http: Http) {}

    //getData():Observable<any>{
    //console.log("1212");
    //return this.http.get(this.getURL)
        //.map((res:Response) => res);
    //}
    //  return this.http.post('http://localhost:8080/RESTfulExample/rest', JSON.stringify({ email: email, password: password }))
    getData(){

    }

    login(userid: string, password: string): Observable<any> {
      this.headers = new Headers({ 'Content-Type': 'application/json' });
       this.options = new RequestOptions({ headers: this.headers });
    //  var headers = new Headers();
      //headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
      //headers.append('Access-Control-Allow-Origin', "*"); x-www-form-urlencoded
      var creds = 'userid=' + userid + '&password='+password;
      let body = JSON.stringify(creds);
      //headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/JerseyDemos/rest/user/get', body, this.options)
            .map((response: Response) => response.json());
          //  response.json();
                // login successful if there's a jwt token in the response
                //let user = response.json();
                //if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    //localStorage.setItem('currentUser', JSON.stringify(user));
              //  }
          //  });
    }

    logout() {
        // remove user from local storage to log user out
        //localStorage.removeItem('currentUser');
    }
}
