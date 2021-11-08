import { Component, OnInit } from '@angular/core';
import { latinMap } from 'ng-bootstrap/typeahead';
import { TaxiDriver } from '../class/taxi-driver';
import { Travel } from '../class/travel';
import { TaxiDriverService } from '../services/taxi-driver.service';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  constructor(private travelSer: TravelService,
    private TaxiDriverSer: TaxiDriverService
  ) { }

  ngOnInit(): void {
    this.TaxiDriverSer.GetAll().subscribe(x => { this.driverlist = x });
  }

  //startingPoint:Travel=new Travel();

  startingPoint: location;
  destinatiPnpoint: location;
  driverlist: Array<TaxiDriver> = new Array<TaxiDriver>();
  // צריך לחשב את המרחקים של הנהגים מהלקוחות

  lookForDriver() {
    this.startingPoint.lat = "31.309501647949219";
    this.startingPoint.lng = "31.309501647949219";
    this.driverlist.forEach(element => {
      if (element.currentLocationLat == this.startingPoint.lat &&
        element.currentLocationLng == this.startingPoint.lng)
        alert("רוצה לקחת נסיעה?" + element.driverName);
    });
  }
  // חישוב מחיר נסיעה לפי קילומטר
  pricePerKilometer(lat: string, lng: string) {

  }
}
interface location {
  lat: string;
  lng: string;
}