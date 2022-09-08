import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts(id: string | null){
    if (id !=  null) {
      const params = new HttpParams()
        .set('id', id)

      return this.http.get('http://localhost:4201/api/user/posts', {params})
    }
    return
  }
}
