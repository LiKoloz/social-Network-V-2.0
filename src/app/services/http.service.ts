import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
              ) { }

  getInfo(userInfo: {email: string, password: string}) {
    const params = new HttpParams()
      .set('email', userInfo.email)
      .set('password', userInfo.password)
    return this.http.get('http://localhost:4201/api', {params});
  }
}
 // СДЕЛАТЬ ОБРАЩЕНИЕ К jSON ФАЙЛУ С ПОЛЬЗОВАТЕЛЬЯМИ
