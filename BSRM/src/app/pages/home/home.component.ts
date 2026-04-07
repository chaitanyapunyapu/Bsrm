import { Component, OnInit } from '@angular/core';
import { BikedetailsService } from 'src/app/service/bikedetails.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  bikes=[{logo:'',id:'',alt:'',link:''}]
  message = '';

  constructor(
    private api: BikedetailsService, 
    private http: HttpClient, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBikes();
    this.checkUser();
  }

  checkUser(): void {
    this.http.get(`${environment.apiUrl}api/user/`).subscribe({
      next: (res: any) => {
        this.message = `Welcome back, ${res.username}`;
        this.api.setAuthenticated(true);
      },
      error: () => {
        this.message = 'Find Your Dream Ride';
        this.api.setAuthenticated(false);
      }
    });
  }

  getBikes(): void {
    this.api.getLogo().subscribe({
      next: (data) => {
        this.bikes = data;
      },
      error: (err) => {
        console.error('Error fetching logos', err);
      }
    });
  }


  

}
