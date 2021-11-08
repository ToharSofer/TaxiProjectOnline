import { OnInit } from "@angular/core";
// import { start } from "repl";
import { TaxiDriverService } from "../services/taxi-driver.service";
import { TaxiDriver } from "./taxi-driver";
import { Travel } from "./travel";

export class AutocompleteDirectionsHandler {
  // map: google.maps.Map;
  // originPlaceId: string;
  // destinationPlaceId: string;
  // travelMode: google.maps.TravelMode;
  // directionsService: google.maps.DirectionsService;
  // directionsRenderer: google.maps.DirectionsRenderer;
  // inputstart:string
 

  // start:google.maps.LatLng;
 
  // end:google.maps.LatLng;
  // orignput: string = '';
  
  //  {
//     this.map = map;
    // this.inputstart="";
    // this.originPlaceId = "";
    // this.destinationPlaceId = "";
    // this.travelMode = google.maps.TravelMode.DRIVING;
    // this.directionsService = new google.maps.DirectionsService();
    // this.directionsRenderer = new google.maps.DirectionsRenderer();
    // this.directionsRenderer.setMap(map);
    // this.directionsRenderer.setPanel(
    //   document.getElementById("right-panel") as HTMLElement
    // );

    // const control = document.getElementById("left-panel") as HTMLElement;
    // control.style.display = "block";
    // map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

    // const originInput = document.getElementById(
    //   "origin-input"
    // ) as HTMLInputElement;
   
    
    // const destinationInput = document.getElementById(
    //   "destination-input"
    // ) as HTMLInputElement;
    // const modeSelector = document.getElementById(
    //   "mode-selector"
    // ) as HTMLSelectElement;

    // const originAutocomplete = new google.maps.places.Autocomplete(originInput, { componentRestrictions: { country: 'isr' } });
    
    // originAutocomplete.setFields(["place_id"]);

    // const destinationAutocomplete = new google.maps.places.Autocomplete(
    //   destinationInput, { componentRestrictions: { country: 'isr' } }
    // );
    // destinationAutocomplete.setFields(["place_id"]);

    // this.setupClickListener(
    //   "changemode-driving",
    //   google.maps.TravelMode.DRIVING
    // );

    // this.setupPlaceChangedListener(originAutocomplete, "ORIG");
    // this.setupPlaceChangedListener(destinationAutocomplete, "DEST");

    // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
    // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(
    //   destinationInput
    // );
    // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
  }







  // setupClickListener(id: string, mode: google.maps.TravelMode) {
  //   const radioButton = document.getElementById(id) as HTMLInputElement;

  //   radioButton.addEventListener("click", () => {
  //     this.inputstart = ((document.getElementById("origin-input") as HTMLInputElement).value)
  //     let inputend = ((document.getElementById("destination-input") as HTMLInputElement).value)

  //     this.travelMode = mode;
  //     this.route();
  //   });
  // }

  // setupPlaceChangedListener(
  //   autocomplete : google.maps.places.Autocomplete,
  //   mode : string
  // ) {
  //   autocomplete.bindTo("bounds", this.map);

  //   autocomplete.addListener("place_changed", () => {
  //     const place = autocomplete.getPlace();
  //     if (!place.place_id) {
  //       window.alert("Please select an option from the dropdown list.");
  //       return;
  //     }

  //     if (mode === "ORIG") {
  //       this.originPlaceId = place.place_id;
  //       //this.start = new google.maps.LatLng(this.originPlaceId.lat(), place.geometry.location.lng());
  //       // this.originPlaceId=place.name;

  //     } else {
  //       this.destinationPlaceId = place.place_id;
  //       // this.destinationPlaceId=place.name;
  //       //this.end = new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng());
  //     }
     
      
    
  //     this.route();

  //   });
    
  // }

  // route() {

  //   if (!this.originPlaceId || !this.destinationPlaceId) {
  //     return;
  //   }

  //   const me = this;

  //   this.directionsService.route(
  //     {

  //       origin: { placeId: this.originPlaceId },
  //       destination: { placeId: this.destinationPlaceId },
  //       travelMode: this.travelMode,
  //     },
  //     (response, status) => {
  //       if (status === "OK") {
  //         me.directionsRenderer.setDirections(response);
  //       } else {
  //         window.alert("Directions request failed due to " + status);
  //       }
  //     }
  //   );
  // }
// }