import { Component, OnInit } from '@angular/core';
import { BikedetailsService } from '../service/bikedetails.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  bikes=[{logo:'',id:'',alt:'',link:''}]


  constructor(private api:BikedetailsService) {
    this.getBikes()
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
