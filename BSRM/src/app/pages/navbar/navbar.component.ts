import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  authenticated = false;

  @Output() sideNavToggled=new EventEmitter<boolean>();

  // menustatus: boolean=false;
  constructor(
    private http: HttpClient, 
    private authService: BikedetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(res => {
      this.authenticated = res;
    });
  }


  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
