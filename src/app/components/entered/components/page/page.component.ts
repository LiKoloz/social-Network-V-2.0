import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';
import {Post} from "../../post";
import {HttpService} from "../../services/http.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{

  form1: FormGroup;

  fullName: string | null = localStorage.getItem('fullName');
  age: string | null =  localStorage.getItem('age');
  phone: string | null =  localStorage.getItem('phone');
  email: string | null =  localStorage.getItem('email');
  id: string | null =  localStorage.getItem('id');
  posts: Post[] = [new Post('adad')]
  likes: number = 5
  Dislikes: number =5

  private subscription: Subscription;
  constructor(
    private activateRoute: ActivatedRoute,
    private httpService: HttpService
    ){
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);

    this.form1 = new FormGroup({
      newPost: new FormControl(),
    })

  }


  ngOnInit(): void {

  }

  addDisike(post: Post){
   post.disLikes++
  }

  addLike(post: Post){
    post.likes++
  }
}
