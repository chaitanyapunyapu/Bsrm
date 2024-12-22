import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-yamahapage',
  templateUrl: './yamahapage.component.html',
  styleUrls: ['./yamahapage.component.css']
})
export class YamahapageComponent implements OnInit{
  yamahaData: any[]=[];
  getYamahaId: any;
  bikes: any[] = [];

constructor(private param:ActivatedRoute, private api:BikedetailsService) { }


ngOnInit(): void {
  this.getYamahaId = this.param.snapshot.paramMap.get('id');
  console.log(this.getYamahaId, 'getyamaha');

  // fetch data from backend
  this.api.getYamaha().subscribe((bikes: any[]) => {
    this.bikes = bikes;

    if (this.getYamahaId) {
      this.yamahaData = this.bikes.filter((value) => {
        return value.id == this.getYamahaId;
      });
      console.log(this.yamahaData, 'yamahadata>>');
    }
  })
}
}
      
  


