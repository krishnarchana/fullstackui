import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginAuthenticationService {
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

    login(userid: string, password: string) {
      var headers = new Headers();
      //headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
      //headers.append('Access-Control-Allow-Origin', "*"); x-www-form-urlencoded
      var creds = 'userid=' + userid + '&password='+password;
      headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/RESTfulExample/rest/hello/gopi', creds, {headers: headers})
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
