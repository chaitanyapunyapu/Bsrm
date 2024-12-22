import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';

@Component({
  selector: 'app-motorpage',
  templateUrl: './motorpage.component.html',
  styleUrls: ['./motorpage.component.css']
})
export class MotorpageComponent  implements OnInit{
  bajajData: any[]=[];
  getBajajId: any;
  bikes: any[] = [];

  constructor(private param:ActivatedRoute, private api:BikedetailsService) { }
 

  ngOnInit(): void {
    this.getBajajId = this.param.snapshot.paramMap.get('id');
    console.log(this.getBajajId, 'getbajaj');

    // fetch data from backend
    this.api.getBajaj().subscribe((bikes: any[]) => {
      this.bikes = bikes;

      if (this.getBajajId) {
        this.bajajData = this.bikes.filter((value) => {
          return value.id == this.getBajajId;
        });
        console.log(this.bajajData, 'bajajdata>>');
      }
    })
  }

}
