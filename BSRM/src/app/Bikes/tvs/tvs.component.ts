import { Component, OnInit } from '@angular/core';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent{
  bikes=[{vimg:'',id:'',price:'',Model:'',Type:'',Engine:'',Gears:''}]

  constructor(private api:BikedetailsService) {
    this.getBikes()
  }
  getBikes(){
    this.api.getTvs().subscribe(
      data =>{
        this.bikes=data
      },
      error => {
        console.log(error)
      }
    )
  }

  

  func(){
    confirm("please confirm booking ")


}


}
