import { Component, OnInit } from '@angular/core';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-rc',
  templateUrl: './rc.component.html',
  styleUrls: ['./rc.component.css']
})
export class RcComponent implements OnInit {
  bikes: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private api: BikedetailsService) {}

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes(): void {
    this.loading = true;
    this.api.getRc().subscribe({
      next: (data) => {
        this.bikes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching RC bikes', err);
        this.error = 'Failed to load bikes. Please try again later.';
        this.loading = false;
      }
    });
  }



  

  func(){
    confirm("please confirm booking ")
  }

}
