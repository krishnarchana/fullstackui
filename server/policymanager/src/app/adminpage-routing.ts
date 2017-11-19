import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute, Routes, Router } from '@angular/router';

import { AdminPageComponent } from './adminpage.component';

const adminpageRoutes: Routes = [
  { path: 'adminPage', component: AdminPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(adminpageRoutes) ],
  exports: [ RouterModule ]
})

export class AdminPageRoutingModule {
    public userPerm;
     
	constructor(private route: ActivatedRoute, private router: Router) {}
	
	redirect(){
		console.log("redirect");
		this.userPerm = this.route.snapshot.queryParams["saveEdit"];
		if(this.userPerm=='redirect'){
			this.router.navigate(['/userPage']);
		}
	}
}
