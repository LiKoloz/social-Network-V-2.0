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
    if(userInfo.email == 'admin@emal.com' && userInfo.password == 'admin123') {
      this.setToken('123')
      return of(true)
    }

    return throwError(() => Error('Failed login'))
  }
  logout(){
    this.router.navigate(['login'])
  }
}
