import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-tvspage',
  templateUrl: './tvspage.component.html',
  styleUrls: ['./tvspage.component.css']
})
export class TvspageComponent  implements OnInit{
  tvsData: any[]=[];
  getTvsId: any;
  bikes: any[] = [];


  constructor(private param:ActivatedRoute, private api:BikedetailsService) { }



  ngOnInit(): void {
    this.getTvsId = this.param.snapshot.paramMap.get('id');
    console.log(this.getTvsId, 'gettvs');

    // fetch data from backend
    this.api.getTvs().subscribe((bikes: any[]) => {
      this.bikes = bikes;

      if (this.getTvsId) {
        this. tvsData = this.bikes.filter((value) => {
          return value.id == this.getTvsId;
        });
        console.log(this. tvsData, ' tvsdata>>');
      }
    })
  }

}
