import { Component, OnInit } from '@angular/core';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-honda',
  templateUrl: './honda.component.html',
  styleUrls: ['./honda.component.css'],
  providers:[BikedetailsService]
})
export class HondaComponent{
  bikes=[{vimg:'',id:'',price:'',Model:'',Type:'',Engine:'',Gears:''}]
 
constructor(private api:BikedetailsService) {
  this.getBikes()
}
getBikes(){
  this.api.getHonda().subscribe(
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
