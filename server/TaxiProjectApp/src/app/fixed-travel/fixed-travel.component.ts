import { Component, OnInit } from '@angular/core';
import { Travel } from '../class/travel';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-fixed-travel',
  templateUrl: './fixed-travel.component.html',
  styleUrls: ['./fixed-travel.component.scss']
})
export class FixedTravelComponent implements OnInit {

  constructor(private travelSer:TravelService) { }

  listTravel:Array<Travel>=new Array<Travel>();

  ngOnInit(): void {
    this.travelSer.GetAll().subscribe(x=>this.listTravel=x);
   
  }

}
