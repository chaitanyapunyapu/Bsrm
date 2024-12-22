import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-ktmpage',
  templateUrl: './ktmpage.component.html',
  styleUrls: ['./ktmpage.component.css']
})
export class KtmpageComponent implements OnInit{
  ktmData: any[]=[];
  getKtmId: any;
  bikes: any[] = [];

constructor(private param:ActivatedRoute, private api:BikedetailsService) { }


ngOnInit(): void {
  this.getKtmId = this.param.snapshot.paramMap.get('id');
  console.log(this.getKtmId, 'gethonda');

  // fetch data from backend
  this.api.getKtm().subscribe((bikes: any[]) => {
    this.bikes = bikes;

    if (this.getKtmId) {
      this.ktmData = this.bikes.filter((value) => {
        return value.id == this.getKtmId;
      });
      console.log(this.ktmData, 'ktmData>>');
    }
  })
}

}
