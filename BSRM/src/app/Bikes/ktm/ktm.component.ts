import { Component, OnInit } from '@angular/core';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-ktm',
  templateUrl: './ktm.component.html',
  styleUrls: ['./ktm.component.css']
})
export class KtmComponent{
  bikes=[{vimg:'',id:'',price:'',Model:'',Type:'',Engine:'',Gears:''}]
 

  constructor(private api:BikedetailsService) {
    this.getBikes()
  }
  getBikes(){
    this.api.getKtm().subscribe(
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
