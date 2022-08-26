import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { Observable, of, throwError} from 'rxjs';
import {User} from "../../user";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private httpService: HttpService
              ) { }

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
    if(userInfo.email == ('admin@email.com') && userInfo.password == 'admin123') {
      this.setToken('entered!')
      return of(true)
    }

    return throwError(() => Error('Failed login'))
  }
  logout(){
    this.router.navigate(['login'])
  }
}
