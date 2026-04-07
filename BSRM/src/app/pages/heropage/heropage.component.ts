import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';

@Component({
  selector: 'app-heropage',
  templateUrl: './heropage.component.html',
  styleUrls: ['./heropage.component.css']
})
export class HeropageComponent implements OnInit {
  heroData: any = null;
  getHeroId: any;
  bikes: any[] = [];
  isImageOpen: boolean = false;

  constructor(
    private param: ActivatedRoute,
    private api: BikedetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHeroId = this.param.snapshot.paramMap.get('id');

    this.api.getHero().subscribe((bikes: any[]) => {
      this.bikes = bikes;
      if (this.getHeroId) {
        this.heroData = this.bikes.find(b => b.id == this.getHeroId);
      }
    });
  }

  toggleImage(): void {
    this.isImageOpen = !this.isImageOpen;
    document.body.style.overflow = this.isImageOpen ? 'hidden' : 'auto';
  }

  goBack(): void {
    this.router.navigate(['/hero']);
  }
}
