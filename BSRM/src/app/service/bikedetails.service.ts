import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http' ;
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BikedetailsService {

  baseurl="http://127.0.0.1:8000/"
  httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  private apiUrl = 'http://127.0.0.1:8000/api/auth';
  private tokenKey = 'myapp_token';

  private isAuthenticated = new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient) { }

  
  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  setAuthenticated(value: boolean): void {
    this.isAuthenticated.next(value);
  }


  // getLogo(): Observable<any>{
  //   const url=this.baseurl+'api/logo/'
  //   return this.http.get(url, {headers:this.httpHeaders})
  // }
  

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(res => {
        const token = res.token;
        sessionStorage.setItem(this.tokenKey, token);
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
  registerNewUser(userData:any): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/users/', userData)
  }


  getHonda():Observable<any>{
    return this.http.get(this.baseurl+ '/honda/',{headers: this.httpHeaders})
  }
 
  getBajaj():Observable<any>{
    return this.http.get(this.baseurl+ '/bajaj/',{headers: this.httpHeaders})
  }

  getHero():Observable<any>{
    return this.http.get(this.baseurl+ '/hero/',{headers: this.httpHeaders})
  }

  getKtm():Observable<any>{
    return this.http.get(this.baseurl+ '/ktm/',{headers: this.httpHeaders})
  }

  getRc():Observable<any>{
    return this.http.get(this.baseurl+ '/rc/',{headers: this.httpHeaders})
  }

  getSuzuki():Observable<any>{
    return this.http.get(this.baseurl+ '/suzuki/',{headers: this.httpHeaders})
  }

  getTvs():Observable<any>{
    return this.http.get(this.baseurl+ '/tvs/',{headers: this.httpHeaders})
  }

  getYamaha():Observable<any>{
    return this.http.get(this.baseurl+ '/yamaha/',{headers: this.httpHeaders})
  }

  getLogo():Observable<any>{
    return this.http.get(this.baseurl+ '/logo/',{headers: this.httpHeaders})
  }

 
}


