import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {catchError, Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  setToken(token: string){
    localStorage.setItem('token', token)
  }
  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(){
    return this.getToken() !== null
  }

  login(userInfo: {email:string, password:string}) : Observable<string | boolean>{
    if(userInfo.email == "123@emal.com") {
      this.setToken('123')
      return of(true)
    }

    return throwError(() => Error('Failed login'))
  }
}
