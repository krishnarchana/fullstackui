import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, Params } from '@angular/router';

import { AlertService } from './alert.service';
import { LoginAuthenticationService } from './loginAuth.service';
import { UserLogin } from './UserLogin';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  //model: any = {};
    loading = false;
    returnUrl: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private model: UserLogin,
        private authenticationService: LoginAuthenticationService,
        public alertService: AlertService) {
          }

    ngOnInit() {
    //  console.log(localStorage.getItem('Authorization'));
      //  console.log(localStorage.removeItem('Authorization'));
    //      console.log("hi",localStorage.getItem('Authorization'));
        // reset login status
      //  this.authenticationService.logout();
      //console.log("here2");
      //this.authenticationService.getData()
        //  .subscribe(
        //      data => {
          //        console.log("good",data);

        //      },
          //    error => {
          //        this.alertService.error(error);
        //          this.loading = false;
        //      });

        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
      console.log(this.model);
      let navextras: NavigationExtras;
      this.authenticationService.login(this.model)

        .subscribe(
            data => {
               console.log("login",data);
                let user = data;
              //  console.log(user.token);
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('Authorization', user.token);
                }
                navextras={queryParams:{"Authorization": user.name}};
                this.router.navigate(['/userPage'], navextras);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
