import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:string= "http://localhost:9090/login"
  constructor(public httpClient:HttpClient) { }

  signUp(login:any):Observable<string>{
    return this.httpClient.post(this.baseUrl + "/signup", login, { responseType: "text" });
  }

  signIn(login:any):Observable<string>{
    return this.httpClient.post(this.baseUrl + "/signin", login, { responseType: "text" });
  }
}
