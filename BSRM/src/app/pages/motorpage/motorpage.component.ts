import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';

@Component({
  selector: 'app-motorpage',
  templateUrl: './motorpage.component.html',
  styleUrls: ['./motorpage.component.css']
})
export class MotorpageComponent implements OnInit {
  bajajData: any = null;
  getBajajId: any;
  bikes: any[] = [];
  isImageOpen: boolean = false;

  constructor(
    private param: ActivatedRoute,
    private api: BikedetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBajajId = this.param.snapshot.paramMap.get('id');

    this.api.getBajaj().subscribe((bikes: any[]) => {
      this.bikes = bikes;
      if (this.getBajajId) {
        this.bajajData = this.bikes.find(b => b.id == this.getBajajId);
      }
    });
  }

  toggleImage(): void {
    this.isImageOpen = !this.isImageOpen;
    document.body.style.overflow = this.isImageOpen ? 'hidden' : 'auto';
  }

  goBack(): void {
    this.router.navigate(['/bajaj']);
  }
}
