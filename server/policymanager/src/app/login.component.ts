import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, Params } from '@angular/router';
import {NgForm} from '@angular/forms';

import { AlertService } from './alert.service';
import { LoginAuthenticationService } from './loginAuth.service';
import { UserLogin } from './UserLogin';

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private model: UserLogin,
    private authenticationService: LoginAuthenticationService,
    public alertService: AlertService) {
    	localStorage.removeItem('Authorization');
    }

    ngOnInit() {}

    login(form: NgForm) {
      let navextras: NavigationExtras;
      this.authenticationService.login(this.model)
      .subscribe(
        data => {
          console.log("login success data",data);
          let user = data;
          if (user && user.token) {
            localStorage.setItem('Authorization', user.token);
          }
          navextras={queryParams:{"Authorization": user.name}};
          form.reset();
          this.router.navigate(['/userPage'], navextras);
        },
        error => {
          console.log("error ", error);
          this.alertService.error(error.errorStr);
          setTimeout(() => { this.alertService.clearMessage(); }, 2000); 
        });
      }
    }
