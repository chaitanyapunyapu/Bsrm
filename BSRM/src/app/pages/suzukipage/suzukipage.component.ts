import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';

@Component({
  selector: 'app-suzukipage',
  templateUrl: './suzukipage.component.html',
  styleUrls: ['./suzukipage.component.css']
})
export class SuzukipageComponent implements OnInit {
  suzukiData: any = null;
  getSuzukiId: any;
  bikes: any[] = [];
  isImageOpen: boolean = false;

  constructor(
    private param: ActivatedRoute,
    private api: BikedetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getSuzukiId = this.param.snapshot.paramMap.get('id');

    this.api.getSuzuki().subscribe((bikes: any[]) => {
      this.bikes = bikes;
      if (this.getSuzukiId) {
        this.suzukiData = this.bikes.find(b => b.id == this.getSuzukiId);
      }
    });
  }

  toggleImage(): void {
    this.isImageOpen = !this.isImageOpen;
    document.body.style.overflow = this.isImageOpen ? 'hidden' : 'auto';
  }

  goBack(): void {
    this.router.navigate(['/suzuki']);
  }
}
