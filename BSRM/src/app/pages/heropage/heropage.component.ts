import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-heropage',
  templateUrl: './heropage.component.html',
  styleUrls: ['./heropage.component.css']
})
export class HeropageComponent  implements OnInit{
  heroData: any[]=[];
  getHeroId: any;
  bikes: any[] = [];

 constructor(private param:ActivatedRoute, private api:BikedetailsService) { }

 ngOnInit(): void {
  this.getHeroId = this.param.snapshot.paramMap.get('id');
  console.log(this.getHeroId, 'gethero');

  // fetch data from backend
  this.api.getHero().subscribe((bikes: any[]) => {
    this.bikes = bikes;

    if (this.getHeroId) {
      this.heroData = this.bikes.filter((value) => {
        return value.id == this.getHeroId;
      });
      console.log(this.heroData, 'herodata>>');
    }
  })
}

}
