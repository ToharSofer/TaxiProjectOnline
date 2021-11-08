// import { } from 'google.maps';
import { OnInit, AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MapsAPILoader } from "@agm/core";
import { Travel } from '../class/travel';
import { TaxiDriver } from '../class/taxi-driver';
import { TaxiDriverService } from '../services/taxi-driver.service';
import { TaxiStationsService } from '../services/taxi-stations.service';
import { TaxiStations } from '../class/taxi-stations';
import { Driver, Ride } from '../class/Ride';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})

export class GoogleMapComponent implements OnInit {
  start: google.maps.LatLng;
  end: google.maps.LatLng;
  pos;
  title: string = 'app';

  constructor(private taxiDriverSer: TaxiDriverService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public taxiStationSer: TaxiStationsService
  ) { }

  map: google.maps.Map;
  tr: Travel = new Travel();
  td: TaxiDriver = new TaxiDriver();
  price: boolean;
  time: boolean;
  driver: TaxiDriver;
  heap: Array<Driver> = new Array<Driver>();
  listTaxiDriver: Array<TaxiDriver> = new Array<TaxiDriver>();
  station: Array<TaxiStations> = new Array<TaxiStations>();
  AoriginPlaceId: google.maps.LatLng;
  BdestinationPlaceId: google.maps.LatLng;
  travelMode: google.maps.TravelMode;
  directionsService: google.maps.DirectionsService;
  directionsRenderer: google.maps.DirectionsRenderer;
  inputstart: string;
  inputend: string;
  orignput: string = '';
  originPlaceId: string;
  destinationPlaceId: string;
  // station: Array<TaxiStations>,
  // listTaxiDriver: Array<TaxiDriver>
 ;
  ngOnInit(): void {

    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 32.450883277452476, lng: 34.89038050000002 },
      zoom: 14,
      mapTypeControl: false,
      minZoom: 8,
      maxZoom: 20,
    } as google.maps.MapOptions);

  
    // let marker: google.maps.Marker;
    let infoWindow: google.maps.InfoWindow;
    infoWindow = new google.maps.InfoWindow();

    // infoWindow: 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          this.pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,

          };
          console.log(this.pos)
          this.map.setCenter(this.pos);
          this.AoriginPlaceId = this.pos;
          this.BdestinationPlaceId = this.pos
        },
      );
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, this.map.getCenter()!);
    }
    this.autocompleteDirectionsHandlet(this.map);
console.log(this.inputstart);

    this.taxiDriverSer.GetAll().subscribe(x => {
      this.listTaxiDriver = x
    });
    this.taxiStationSer.GetAll().subscribe(x => {
      this.station = x
    });

  }
  // showPlaceN(){
  //   this.inputstart = ((document.getElementById("origin-input") as HTMLInputElement).value)
  //   this.inputend = ((document.getElementById("destination-input") as HTMLInputElement).value)
  //   console.log(this.inputstart);
  //   console.log(this.inputend);
    
  // }
  // AutocompleteDirectionsHandler
  autocompleteDirectionsHandlet(map: google.maps.Map) {
    this.inputstart = "";
    this.inputend = "";
    this.travelMode = google.maps.TravelMode.DRIVING;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);
    this.directionsRenderer.setPanel(
      document.getElementById("right-panel") as HTMLElement
    );

    const control = document.getElementById("left-panel") as HTMLElement;
    control.style.display = "block";
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    const originInput = document.getElementById(
      "origin-input"
    ) as HTMLInputElement;

    const destinationInput = document.getElementById(
      "destination-input"
    ) as HTMLInputElement;

    const modeSelector = document.getElementById(
      "mode-selector"
    ) as HTMLSelectElement;

    const originAutocomplete = new google.maps.places.Autocomplete(originInput, { componentRestrictions: { country: 'isr' } });

    originAutocomplete.setFields(["place_id"]);

    const destinationAutocomplete = new google.maps.places.Autocomplete(
      destinationInput, { componentRestrictions: { country: 'isr' } }
    );
    destinationAutocomplete.setFields(["place_id"]);

    this.setupClickListener(
      "changemode-driving",
      google.maps.TravelMode.DRIVING
    );

    this.setupPlaceChangedListener(originAutocomplete, "ORIG");
    this.setupPlaceChangedListener(destinationAutocomplete, "DEST");

    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
      destinationInput
    );
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
  }


  setupClickListener(id: string, mode: google.maps.TravelMode) {
    const radioButton = document.getElementById(id) as HTMLInputElement;

    radioButton.addEventListener("click", () => {
      this.inputstart = ((document.getElementById("origin-input") as HTMLInputElement).value)
        this.inputend = ((document.getElementById("destination-input") as HTMLInputElement).value)
        var placesService = new google.maps.places.PlacesService(this.map);

        placesService.getDetails(
            {placeId: this.destinationPlaceId},
            function(results, status) {
              
                console.log(results.geometry.location.lat());
               
            }
        );

      this.travelMode = mode;
      this.route();
    });
  }

  setupPlaceChangedListener(autocomplete: google.maps.places.Autocomplete, mode: string) {
    this.originPlaceId = "";
    this.destinationPlaceId = "";
    autocomplete.bindTo("bounds", this.map);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
     
      const str =autocomplete.getBounds();
      console.log(str);
      
      
      
      if (!place.place_id) {
        window.alert("Please select an option from the dropdown list.");
        return;
      }

      if (mode === "ORIG") {
        this.originPlaceId = place.place_id;
        // console.log(place.geometry.location.lat()+","+place.geometry.location.lng());
      }
      else {
        this.destinationPlaceId = place.place_id;
      }
      
      
      
      this.route();

    });
  }

  route() {

    if (!this.originPlaceId || !this.destinationPlaceId) {
      return;
    }

    const me = this;

    this.directionsService.route(
      {

        origin: { placeId: this.originPlaceId },
        destination: { placeId: this.destinationPlaceId },
        travelMode: this.travelMode,
      },
      (response, status) => {
        if (status === "OK") {
          me.directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }

  goToclass() {
    let d = this.listTaxiDriver.find(x => x.DriverId == this.td.DriverId);
    //לשנות את השם שלהם למה שאני שולפת בHTML
    this.findingOptimalDriver(this.AoriginPlaceId, this.BdestinationPlaceId, this.tr.PriorityPrice, this.tr.PriorityTime, d);
  }

  //FindingAnOptionalDriver
  findingOptimalDriver(start: google.maps.LatLng, end: google.maps.LatLng, price: boolean,
    time: boolean, driver: TaxiDriver) {

    if (driver != undefined) {
      let messege=this.taxiDriverSer.SetRide(new Ride(driver.DriverId,this.inputstart,this.inputend));
      if (messege)
        alert(" הנהג " + driver.DriverName + " בדרך אליך ");
      else
        alert("הנהג המבוקש אינו פנוי בחר נסיעה חדשה");
    }
    else {
      this.build(start);
      if (time && price) {
        this.fix("distance");
        this.fixByTime("price");
      }
      else {
        if (this.time)
          this.fix("distance");
        if (this.price)
          this.fix("price");
      }
      this.fixByTime("priority");
      this.takeRide();
    }

  }

  //Heap
  build(start: google.maps.LatLng) {
    // in this loop i build list with all the driver that in 1000 km from the client
    delete this.listTaxiDriver[0];
    this.listTaxiDriver.forEach(element => {
      let d: Driver = new Driver();
      let point = new google.maps.LatLng(element.CurrentLocationLat, element.CurrentLocationLng);
      // let p=new google.maps.LatLng(this.pos);

      let p = new google.maps.LatLng(34.588699340820312, 34.588699340820312);

      let dis = google.maps.geometry.spherical.computeDistanceBetween(p, point);

      if (dis < 10000) {
        d.name = element.DriverName;
        d.id = element.DriverId;
        d.priority = element.Prioritys;
        let stat = this.station.find(x => x.StationCode == element.StationCode);
        d.price = stat.PricePerKilometer;
        d.distance = dis;
        this.heap.push(d);
      }
    });
  }

  fix(parameter: string) {
    //fix the heap just with this paramter
    this.heap.sort((a, b) => (a[parameter] < b[parameter]) ? 1 : -1);
  }

  fixByTime(parameter: string) {
    //fix the heap  with this paramter and  time 
    for (let index = this.heap.length - 1; index >= 0; index--) {
     
      if (this.heap[index][parameter] < this.heap[Math.round(index / 2)][parameter] && this.heap[index].distance <= (this.heap[Math.round(index / 2)].distance + 100)) {
        let temp = this.heap[Math.round(index / 2)];
        this.heap[Math.round(index / 2)] = this.heap[index];
        this.heap[index] = temp;
      }
    }
  }

  takeRide() {
    let take = false;
    while (this.heap != null && take == false) {
      let driver = this.heap.pop();
      if (this.taxiDriverSer.SetRide(new Ride(driver.id, this.inputstart,this.inputend))) {
        alert(" הנהג" + driver.name + " בדרך אליך ");//הודעה על המסך שם הנהג המרחק מהלקוח בקלומטרים ומחיר משוער
        take = true;
        this.taxiDriverSer.priority(driver.id);
      }
    }
    if (take == false)
      alert("מצטערים אך אין מוניות פנויות נסה שוב בזמן אחר");
  }

  handleLocationError(
    browserHasGeolocation: boolean,
    infoWindow: google.maps.InfoWindow,
    pos: google.maps.LatLng
  ) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(this.map);

  }
 
}





