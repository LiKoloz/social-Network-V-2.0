import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from "../User";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get('assets/user.json').pipe(map((data:any)=>{
      let usersList = data["userList"];
      return usersList.map(function(user: any): User {
        return new User(user.email, user.password);
      });
    }));
  }
}
 // СДЕЛАТЬ ОБРАЩЕНИЕ К jSON ФАЙЛУ С ПОЛЬЗОВАТЕЛЬЯМИ
