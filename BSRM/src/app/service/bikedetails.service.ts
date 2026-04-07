import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BikedetailsService {

  private baseurl = environment.apiUrl;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private tokenKey = 'myapp_token';
  private isAuthenticated = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient) { }

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  setAuthenticated(value: boolean): void {
    this.isAuthenticated.next(value);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseurl}api/login/`, { username, password }).pipe(
      tap(res => {
        const token = res.token;
        if (token) {
          sessionStorage.setItem(this.tokenKey, token);
          this.setAuthenticated(true);
        }
      })
    );
  }

  logout(): void {
    sessionStorage.removeItem(this.tokenKey);
    this.setAuthenticated(false);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  registerNewUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseurl}api/register/`, userData);
  }

  getHonda(): Observable<any> {
    return this.http.get(`${this.baseurl}honda/`, { headers: this.httpHeaders });
  }

  getBajaj(): Observable<any> {
    return this.http.get(`${this.baseurl}bajaj/`, { headers: this.httpHeaders });
  }

  getHero(): Observable<any> {
    return this.http.get(`${this.baseurl}hero/`, { headers: this.httpHeaders });
  }

  getKtm(): Observable<any> {
    return this.http.get(`${this.baseurl}ktm/`, { headers: this.httpHeaders });
  }

  getRc(): Observable<any> {
    return this.http.get(`${this.baseurl}rc/`, { headers: this.httpHeaders });
  }

  getSuzuki(): Observable<any> {
    return this.http.get(`${this.baseurl}suzuki/`, { headers: this.httpHeaders });
  }

  getTvs(): Observable<any> {
    return this.http.get(`${this.baseurl}tvs/`, { headers: this.httpHeaders });
  }

  getYamaha(): Observable<any> {
    return this.http.get(`${this.baseurl}yamaha/`, { headers: this.httpHeaders });
  }

  getLogo(): Observable<any> {
    return this.http.get(`${this.baseurl}logo/`, { headers: this.httpHeaders });
  }
}


