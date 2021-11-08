import { OnInit, AfterViewInit, Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { MapsAPILoader } from "@agm/core";
import { } from 'google.maps';
import { AutocompleteDirectionsHandler } from "../class/AutocompleteDirectionsHandler";

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  title: string = 'app';
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    const ISRAEL_BOUNDS = {
      //latMax 
      north: 35.667,
      //latMin
      south: 29,
      //lngMax
      west: 34.286,
      //lngmin
      east: 30.525,
    };

    let map: google.maps.Map,
      infoWindow: google.maps.InfoWindow;

    const center: google.maps.LatLngLiteral = { lat: 32.450883277452476, lng: 34.89038050000002 };

    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 32.0127463274658, lng: 34.7789974668429 },
      // restriction: {
      //   latLngBounds: ISRAEL_BOUNDS,
      //   strictBounds: false,
      // },
      zoom: 15,
      // minZoom:8,
    } as google.maps.MapOptions);

    // infoWindow: google.maps.InfoWindow;

    let auto = new AutocompleteDirectionsHandler(map);
   // auto.originPlaceId=
    
    const locationButton = document.createElement("button");
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("custom-map-control-button");

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    
    
    locationButton.addEventListener("click", () => {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent("Location found.");
            infoWindow.open(map);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter()!);
          }
        );
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter()!);
      }
    });
   }


}
function handleLocationError(
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


