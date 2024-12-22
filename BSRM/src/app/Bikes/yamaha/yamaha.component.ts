import { Component,OnInit } from '@angular/core';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-yamaha',
  templateUrl: './yamaha.component.html',
  styleUrls: ['./yamaha.component.css']
})
export class YamahaComponent{
  bikes=[{vimg:'',id:'',price:'',Model:'',Type:'',Engine:'',Gears:''}]

  constructor(private api:BikedetailsService) {
    this.getBikes()
  }
  getBikes(){
    this.api.getYamaha().subscribe(
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
