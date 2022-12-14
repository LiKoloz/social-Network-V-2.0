import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'main-comp',
  template: `
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.navigate(['login'])
  }
}
