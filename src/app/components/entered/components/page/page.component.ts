import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';
import {Post} from "../../post";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  form1: FormGroup;

  a = new Post('121212', 5, 6)

  fullName: string = '123';
  age: number = 100;
  phone: string = '+79529919823';
  email: string = 'admin@mail.com';
  city: string = "Moskow"
  posts: Post[] = [this.a]
  id: number | undefined;
  likes: number = 5
  Dislikes: number =5

  private subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute){
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);

    this.form1 = new FormGroup({
      newPost: new FormControl(),
    })
  }

  addDisike(post: Post){
   post.disLikes++
  }

  addLike(post: Post){
    post.likes++
  }
}
