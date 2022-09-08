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

  data : any = localStorage.getItem('data')
  fullName: string | null = localStorage.getItem('fullName');
  age: string | null =  localStorage.getItem('age');
  phone: string | null =  localStorage.getItem('phone');
  email: string | null =  localStorage.getItem('email');
  posts: Post[] = [new Post('adad')]
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
