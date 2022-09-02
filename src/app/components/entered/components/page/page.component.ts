import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  fullName: string = '123';
  age: number = 100;
  phone: string = '+79529919823';
  email: string = 'admin@mail.com';
  city: string = "Moskow"
  posts: string[] = ['asdasdasdsd', `qwewqewqsdfasaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  kjl;l;aaaaaaaa
  ;l'k;'eweq`,'2213213', '213213', '213213', '213213','2213213','2213213','2213213','2213213','2213213','2213213','2213213']

  id: number | undefined;
  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute){

    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit(): void {
  }

}
