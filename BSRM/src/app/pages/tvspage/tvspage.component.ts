import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';

@Component({
  selector: 'app-tvspage',
  templateUrl: './tvspage.component.html',
  styleUrls: ['./tvspage.component.css']
})
export class TvspageComponent implements OnInit {
  tvsData: any = null;
  getTvsId: any;
  bikes: any[] = [];
  isImageOpen: boolean = false;

  constructor(
    private param: ActivatedRoute,
    private api: BikedetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTvsId = this.param.snapshot.paramMap.get('id');

    this.api.getTvs().subscribe((bikes: any[]) => {
      this.bikes = bikes;
      if (this.getTvsId) {
        this.tvsData = this.bikes.find(b => b.id == this.getTvsId);
      }
    });
  }

  toggleImage(): void {
    this.isImageOpen = !this.isImageOpen;
    document.body.style.overflow = this.isImageOpen ? 'hidden' : 'auto';
  }

  goBack(): void {
    this.router.navigate(['/tvs']);
  }
}
