import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
//import 'rxjs/add/operator/map';
import { map, filter, switchMap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  private headers = new HttpHeaders().set('Content-type', 'application/json');

  constructor(private http:HttpClient) { }

  registerUser(user: any){
    //headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/register', user, {headers: this.headers});
      //.pipe(map(res => JSON.stringify(res)));
  }

  authenticateUser(user: any){
    return this.http.post('http://localhost:3000/authenticate', user, {headers: this.headers});
  }

  storeUserData(token: any, user: any){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
