import { Component, OnInit } from '@angular/core';
import { BikedetailsService } from 'src/app/service/bikedetails.service';

@Component({
  selector: 'app-bajaj',
  templateUrl: './bajaj.component.html',
  styleUrls: ['./bajaj.component.css']
})
export class BajajComponent{
  bikes=[{vimg:'',id:'',price:'',Model:'',Type:'',Engine:'',Gears:''}]

  constructor(private api:BikedetailsService) {
    this.getBikes()
  }
  getBikes(){
    this.api.getBajaj().subscribe(
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
