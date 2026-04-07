import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';

@Component({
  selector: 'app-yamahapage',
  templateUrl: './yamahapage.component.html',
  styleUrls: ['./yamahapage.component.css']
})
export class YamahapageComponent implements OnInit {
  yamahaData: any = null;
  getYamahaId: any;
  bikes: any[] = [];
  isImageOpen: boolean = false;

  constructor(
    private param: ActivatedRoute,
    private api: BikedetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getYamahaId = this.param.snapshot.paramMap.get('id');

    this.api.getYamaha().subscribe((bikes: any[]) => {
      this.bikes = bikes;
      if (this.getYamahaId) {
        this.yamahaData = this.bikes.find(b => b.id == this.getYamahaId);
      }
    });
  }

  toggleImage(): void {
    this.isImageOpen = !this.isImageOpen;
    document.body.style.overflow = this.isImageOpen ? 'hidden' : 'auto';
  }

  goBack(): void {
    this.router.navigate(['/yamaha']);
  }
}
