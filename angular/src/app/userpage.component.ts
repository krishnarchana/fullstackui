import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, Params } from '@angular/router';

import { UserpageService } from './userpage-service';
import { Policy } from './Policy';
import { AlertService } from './alert.service';

@Component({
  templateUrl: './userpage.component.html',
  providers: [Policy]
})

export class UserPageComponent implements OnInit {

  public message:any[]=[];
  public msg:any;
  showEditable: boolean = false;
  public editRowId: any;
  public editRowName: string;
  public editing:boolean=false;
  public editAmount:any;
  public compareDate;
  public userPerm;
  public flag: boolean;

 constructor(private route: ActivatedRoute,
             private userService: UserpageService,
             private router: Router,
             public model: Policy,
             public alertService: AlertService) {

              this.userPerm = this.route.snapshot.queryParams["Authorization"];
              this.compareDate =  new Date();

              if(this.userPerm=='Administrator'){
                this.flag=true;
                this.userService.getPolicies()
                .subscribe(
                 data => {
                    this.msg =data;
                    this.message=this.msg;
                    console.log("Admin policies",this.message);
                 },
                 error => {
                     this.alertService.error(error);
                 });
               }else{
                 this.flag=false;
                 this.userService.getUserPolicies()
                 .subscribe(
                  data => {
                  this.msg =data;
                  this.message=this.msg;
                  console.log("User policies",this.message);
                 },
                 error => {
                     this.alertService.error(error);
                 });
               }
          }

          toggle(val){
            this.editRowId = val;
            this.editRowName = val;
            this.editAmount = val;
          }

  saveRow(name, details, plcNo){
    this.model.policyName = name;
    this.model.policyDetails = details;
    this.model.policyNo = plcNo;
    this.userService.saveEditItem(this.model)
        .subscribe(
            data => {
              console.log("edit success:",data);
            },
            error => {
              this.alertService.error(error);
            });
  }

    ngOnInit() {}

    logout() {
        this.userService.logout()
        .subscribe(
        data => {
          console.log("logout:",data);
          this.router.navigate(['/login']);
          localStorage.removeItem('Authorization');
        },
        error => {
          this.alertService.error(error);
        });
    }
}
