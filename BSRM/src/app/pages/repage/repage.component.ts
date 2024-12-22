import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-repage',
  templateUrl: './repage.component.html',
  styleUrls: ['./repage.component.css']
})
export class RepageComponent implements OnInit{
  reData: any[]=[];
  getReId: any;
  bikes: any[] = [];


  constructor(private param:ActivatedRoute, private api:BikedetailsService) { }


  ngOnInit(): void {
    this.getReId = this.param.snapshot.paramMap.get('id');
    console.log(this.getReId, 'getre');

    // fetch data from backend
    this.api.getRc().subscribe((bikes: any[]) => {
      this.bikes = bikes;

      if (this.getReId) {
        this. reData = this.bikes.filter((value) => {
          return value.id == this.getReId;
        });
        console.log(this. reData, ' redata>>');
      }
    })
  }

}
