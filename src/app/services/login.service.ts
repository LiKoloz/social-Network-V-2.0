import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { Observable, of, throwError} from 'rxjs';
import {HttpService} from "./http.service";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private httpService: HttpService,
    private http: HttpClient,
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


  login(userInfo: {email:string, password:string},result : boolean) : Observable<string | boolean>{
    if(result) {
      this.setToken('entered!')
      return of(true)
    }
      return throwError(() => Error('Неправильный логин или пароль'))
  }

  getInfo(userInfo: {email: string, password: string}) {
    const params = new HttpParams()
      .set('email', userInfo.email)
      .set('password', userInfo.password)
    return this.http.get('http://localhost:4201/api', {params});
  }

  getUser(user: {email: string, password: string}){
    const params = new HttpParams()
      .set('email', user.email)
      .set('password', user.password)

    return this.http.get('http://localhost:4201/api/user', {params})
  }

  logout(){
    this.router.navigate(['login'])
  }
}
