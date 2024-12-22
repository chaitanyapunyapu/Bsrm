import { Component,OnInit } from '@angular/core';
import { BikedetailsService } from 'src/app/service/bikedetails.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Emitters} from '../emitters/emitters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  bikes=[{logo:'',id:'',alt:'',link:''}]
  message = '';

  constructor(private api:BikedetailsService, private http: HttpClient, private router: Router){
    this.getBikes()
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = res.username;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
  }


  getBikes(){
    this.api.getLogo().subscribe(
      data =>{
        this.bikes=data
      },
      error => {
        console.log(error)
      }
    )
  }


  

}
