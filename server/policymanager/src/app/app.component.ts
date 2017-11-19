import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  route: string;
  visability;
  isIn = false;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      this.route = location.path();

      if(this.route =='/login'){
        this.visability = true;
      }else{
        this.visability = false;
      }
    });
  }

  toggleState() { // click handler for navbar toggle
    const bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

}
