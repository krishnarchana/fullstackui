import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, Params } from '@angular/router';
import { UserpageService } from './userpage-service';
import { Policy } from './Policy';

@Component({
  templateUrl: './userpage.component.html',
  providers: [Policy]
})

export class UserPageComponent implements OnInit {
  public message:any[]=[];
  public msg:any;
  showEditable: boolean = false;
public  editRowId: any;
public  editRowName: string;
public editing:boolean=false;
public editAmount:any;
 constructor(private route: ActivatedRoute,
   private userService: UserpageService,
 public model: Policy) {
 let navextras: NavigationExtras;
 this.userService.getPolicies()
   .subscribe(
       data => {
           //this.message =data;
           //navextras={queryParams:{"message": JSON.stringify(data)}};
          // this.msg = this.route.snapshot.queryParams["message"];
          //this.msg=JSON.stringify(data);
          this.msg =data;
          this.message=this.msg;
           console.log("policies",this.message);
       },
       error => {
           //this.alertService.error(error);
         //  this.loading = false;
       });
}

toggle(val){
    this.editRowId = val;
    this.editRowName = val;
    this.editAmount = val;
  }

  saveRow(name, details){
    this.model.policyName = name;
    this.model.policyDetails = details;
    console.log(this.model);
    this.userService.saveEditItem(this.model)
        .subscribe(
            data => {
              console.log("edit success:",data);
              //  this.router.navigate(['/userPage']);
            },
            error => {
                //
            });
  }

//this.msg = this.route.snapshot.queryParams["message"];
//this.message =JSON.parse(this.msg);
//console.log(this.message);


//this.message = Array.of(this.message);
//console.log("data ", this.message.length);
//console.log(JSON.stringify(this.message));
     //let company = JSON.parse(params.get('company'));
    // console.log(JSON.stringify(company));
    //}

    ngOnInit() {

    }

  logout() {
      //this.regService.register(this.model)
          //.subscribe(
          //    data => {
          //      console.log("good good:",data);
          //      this.router.navigate(['/login']);

                //setTimeout(() => { this.loginComponent.alertService.success("User Registration Successfull!!"); }, 3000);


          //    },
          //    error => {
          //        this.alertService.error(error);
          //        this.loading = false;
          //    });
  }
}
