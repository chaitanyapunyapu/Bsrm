import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-suzukipage',
  templateUrl: './suzukipage.component.html',
  styleUrls: ['./suzukipage.component.css']
})
export class SuzukipageComponent  implements OnInit{
  suzukiData: any[]=[];
  getSuzukiId: any;
  bikes: any[] = [];

   constructor(private param:ActivatedRoute, private api:BikedetailsService) { }



   ngOnInit(): void {
    this.getSuzukiId = this.param.snapshot.paramMap.get('id');
    console.log(this.getSuzukiId, 'getsuzuki');

    // fetch data from backend
    this.api.getSuzuki().subscribe((bikes: any[]) => {
      this.bikes = bikes;

      if (this.getSuzukiId) {
        this.suzukiData= this.bikes.filter((value) => {
          return value.id == this.getSuzukiId;
        });
        console.log(this.suzukiData, 'suzukidata>>');
      }
    })
  }

}
