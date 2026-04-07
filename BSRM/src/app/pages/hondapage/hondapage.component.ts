import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-hondapage',
  templateUrl: './hondapage.component.html',
  styleUrls: ['./hondapage.component.css']
})
export class HondapageComponent implements OnInit {
  hondaData: any = null;
  getHondaId: any;
  bikes: any[] = [];
  isImageOpen: boolean = false;

  constructor(
    private param: ActivatedRoute,
    private api: BikedetailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHondaId = this.param.snapshot.paramMap.get('id');

    this.api.getHonda().subscribe((bikes: any[]) => {
      this.bikes = bikes;
      if (this.getHondaId) {
        this.hondaData = this.bikes.find(b => b.id == this.getHondaId);
      }
    });
  }

  toggleImage(): void {
    this.isImageOpen = !this.isImageOpen;
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = this.isImageOpen ? 'hidden' : 'auto';
  }

  goBack(): void {
    this.router.navigate(['/honda']);
  }
}
  

  


