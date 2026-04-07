import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';

@Component({
  selector: 'app-repage',
  templateUrl: './repage.component.html',
  styleUrls: ['./repage.component.css']
})
export class RepageComponent implements OnInit {
  reData: any = null;
  getReId: any;
  bikes: any[] = [];
  isImageOpen: boolean = false;

  constructor(
    private param: ActivatedRoute,
    private api: BikedetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getReId = this.param.snapshot.paramMap.get('id');

    this.api.getRc().subscribe((bikes: any[]) => {
      this.bikes = bikes;
      if (this.getReId) {
        this.reData = this.bikes.find(b => b.id == this.getReId);
      }
    });
  }

  toggleImage(): void {
    this.isImageOpen = !this.isImageOpen;
    document.body.style.overflow = this.isImageOpen ? 'hidden' : 'auto';
  }

  goBack(): void {
    this.router.navigate(['/re']);
  }
}
