import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';

@Component({
  selector: 'app-ktmpage',
  templateUrl: './ktmpage.component.html',
  styleUrls: ['./ktmpage.component.css']
})
export class KtmpageComponent implements OnInit {
  ktmData: any = null;
  getKtmId: any;
  bikes: any[] = [];
  isImageOpen: boolean = false;

  constructor(
    private param: ActivatedRoute,
    private api: BikedetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getKtmId = this.param.snapshot.paramMap.get('id');

    this.api.getKtm().subscribe((bikes: any[]) => {
      this.bikes = bikes;
      if (this.getKtmId) {
        this.ktmData = this.bikes.find(b => b.id == this.getKtmId);
      }
    });
  }

  toggleImage(): void {
    this.isImageOpen = !this.isImageOpen;
    document.body.style.overflow = this.isImageOpen ? 'hidden' : 'auto';
  }

  goBack(): void {
    this.router.navigate(['/ktm']);
  }
}
