import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-hondapage',
  templateUrl: './hondapage.component.html',
  styleUrls: ['./hondapage.component.css']
})
export class HondapageComponent implements OnInit{
  hondaData: any[]=[];
  getHondaId: any;
  bikes: any[] = [];

constructor(private param:ActivatedRoute,private api:BikedetailsService) { }
  
  ngOnInit(): void {
    this.getHondaId = this.param.snapshot.paramMap.get('id');
    console.log(this.getHondaId, 'gethonda');

    // fetch data from backend
    this.api.getHonda().subscribe((bikes: any[]) => {
      this.bikes = bikes;

      if (this.getHondaId) {
        this.hondaData = this.bikes.filter((value) => {
          return value.id == this.getHondaId;
        });
        console.log(this.hondaData, 'hondadata>>');
      }
    })
  }
}
  

  


