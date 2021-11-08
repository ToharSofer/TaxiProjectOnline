import { Component, OnInit } from '@angular/core';
import { TaxiDriver } from '../class/taxi-driver';
import { GetTravelService } from '../services/get-travel.service';
import { TaxiDriverService } from '../services/taxi-driver.service';
import { TravelService } from '../services/travel.service';
// import { MapsAPILoader } from "@agm/core";

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  constructor(private travelSer: TravelService,
    // private getTravelSer: GetTravelService,
    private TaxiDriverSer: TaxiDriverService,
    //  private mapsAPILoader: MapsAPILoader,
  ) { }

  ngOnInit(): void {
    // let map: google.maps.Map;
    this.TaxiDriverSer.GetAll().subscribe(x => { this.driverlist = x });
    // let auto = new AutocompleteDirectionsHandler(map);
    
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
      if (element.CurrentLocationLat.toString() == this.startingPoint.lat &&
        element.CurrentLocationLng.toString() == this.startingPoint.lng)
        alert("רוצה לקחת נסיעה?" + element.DriverName);
    });
  }

  // // חישוב מחיר נסיעה לפי קילומטר
  // pricePerKilometer(lat: string, lng: string) {

  // }
  sendMeassege(toAlert: string) {
    alert(toAlert);
  }
}
interface location {
  lat: string;
  lng: string;
}