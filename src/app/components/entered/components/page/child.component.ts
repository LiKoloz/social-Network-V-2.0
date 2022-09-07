import { Component } from '@angular/core';
import {PageComponent} from "./page.component";
import { FormsModule } from '@angular/forms';
import {Post} from "../../post";

@Component({
  selector: 'child-comp',
  template: `
      <label class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Post</label>
      <div class="relative m-10">
        <input type = 'text' [(ngModel)]="newPost" class="block p-4 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full h-1/2" placeholder="Расскажите что-нибудь о себе...">
        <button (click)="addPost()" type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Отправить</button>
      </div>
  `,
  styles: [`h2, p {color:red;}`]
})
export class ChildComponent {

  constructor(private pageComponent: PageComponent) {
  }
  posts = this.pageComponent.posts
  newPost!: string

  addPost() {
    this.pageComponent.posts.push(new Post(this.newPost, 0 ,0))
  }
}
