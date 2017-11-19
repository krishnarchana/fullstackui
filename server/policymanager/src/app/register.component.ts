import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from './User';
import { RegistrationService } from './register.service';
import { AlertService } from './alert.service';
import { LoginComponent } from './login.component';

@Component({
  moduleId: module.id,
  templateUrl: './register.component.html',
  providers: [User, LoginComponent]
})

export class RegisterComponent implements OnInit {
  public model1:any={};
  successMsg: string;
  @ViewChild('birthDate')birthDate: string;
  loading = false;
  dtModel:any;

  constructor(
    public model: User,
    private route: ActivatedRoute,
    private router: Router,
    private regService: RegistrationService,
    private alertService: AlertService,
    public loginComponent: LoginComponent){
    }

    ngOnInit(){ }

    ngAfterViewChecked() {
      var input =   (<HTMLInputElement>document.getElementById('dateField'));

      var today = new Date();
      var day = new String(today.getDate());
      // Set month to string to add leading 0
      var mon = new String(today.getMonth()+1); //January is 0!
      var yr = new String(today.getFullYear());
      if(mon.length < 2) { mon = "0" + mon; }
      if(day.length < 2) { day = "0" + day; }
      var date =  yr + '-' + mon + '-' + day ;
      input.disabled = false;
      input.setAttribute('max', date);
    }

    register() {
     this.dtModel = this.model.dob.split('-');
     this.dtModel = this.dtModel[0] + "-" + this.dtModel[1] + "-" + this.dtModel[2];
     this.model.dob = this.dtModel;
      this.regService.register(this.model)
      .subscribe(
        data => {
          console.log("register:",data);
          this.successMsg = "Login with the " + data.login + " and provided password";
          this.router.navigate(['/login']);
          setTimeout(() => { this.loginComponent.alertService.success(this.successMsg); }, 1000);
        },
        error => {
          this.alertService.error(error.errorStr);
          setTimeout(() => { this.alertService.clearMessage(); }, 2000);
        });
      }
    }
