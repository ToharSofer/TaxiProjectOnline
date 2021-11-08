// import { TaxiDriverService } from "../services/taxi-driver.service";
// import { TaxiDriver } from "./taxi-driver";
// // import { Message } from "./Message";
// import { TravelComponent } from "../travel/travel.component";
// import { Heap } from "src/app/class/Heap"
// import { TaxiStations } from "./taxi-stations";


// export class FindingAnOptionalDriver {

//     originPlaceId: google.maps.LatLng;
//     destinationPlaceId: google.maps.LatLng;
//     driver: TaxiDriver;
//     price: boolean;
//     time: boolean;
//     heap: Heap;
//     taxiDriver: TaxiDriverService;
//      listTaxiDriver: Array<TaxiDriver> = new Array<TaxiDriver>();

//     constructor(originalPlace: google.maps.LatLng, 
//         destinationPlace: google.maps.LatLng, 
//         price: boolean, 
//         time: boolean, 
//         driver: TaxiDriver,
//         station: Array<TaxiStations> ,
//         listTaxiDriver: Array<TaxiDriver> 
//         ) 
//         {
//         this.destinationPlaceId = destinationPlace;
//         this.originPlaceId = originalPlace;
//         this.driver = driver;
//         this.price = price;
//         this.time = time;
//         this.heap = new Heap(originalPlace,station,listTaxiDriver);
//      }









//      FindingOptimalDriver(originalPlace: google.maps.LatLng, 
//        destinationPlace: google.maps.LatLng, 
//          price: boolean, 
//          time: boolean, 
//          driver: TaxiDriver,
//          station: Array<TaxiStations> ,
//        listTaxiDriver: Array<TaxiDriver> )

// {
//          if (this.driver != undefined) {
//              let message;
//              if (message = this.taxiDriver.youTake(this.driver.driverId))                 alert(" הנהג" + this.driver.driverName + " בדרך אליך ");
//              else
//                  alert("הנהג המבוקש אינו פנוי בחר נסיעה חדשה");
//          }
//          else {
//             this.heap.build();
//             if (this.time && this.price) {
//                  this.heap.fix("distance");
//                  this.heap.fixByTime("price");
//              }
//             else {
//                  if (this.time)
//                      this.heap.fix("distance");
//               if (this.price)
//                      this.heap.fix("price");
//              }
//              this.heap.fixByTime("priority");
//              this.heap.takeRide();
//          }
//      }

//  }


