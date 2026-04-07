import { Component,OnInit } from '@angular/core';
import { BikedetailsService } from 'src/app/service/bikedetails.service';


@Component({
  selector: 'app-yamaha',
  templateUrl: './yamaha.component.html',
  styleUrls: ['./yamaha.component.css']
})
export class YamahaComponent implements OnInit {
  bikes: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private api: BikedetailsService) {}

  ngOnInit(): void {
    this.getBikes();
  }

  getBikes(): void {
    this.loading = true;
    this.api.getYamaha().subscribe({
      next: (data) => {
        this.bikes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching Yamaha bikes', err);
        this.error = 'Failed to load bikes. Please try again later.';
        this.loading = false;
      }
    });
  }



  func(){
    confirm("please confirm booking ")
  }

}
