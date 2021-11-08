import { TaxiDriverService } from "../services/taxi-driver.service";
import { TaxiDriver } from "./taxi-driver";

export class BuildingHeap {
    start: google.maps.LatLng;
    listTaxiDriver: Array<TaxiDriver> = new Array<TaxiDriver>();
    taxiDriver: TaxiDriverService;
    heap:Array<driver>=new Array<driver>();
    constructor(start: google.maps.LatLng) {
        this.start = start;
        this.taxiDriver.GetAll().subscribe(x => { this.listTaxiDriver = x });
    }
build(){
let d:driver;
this.listTaxiDriver.forEach(element => {
    let point=new google.maps.LatLng(element.currentLocationLat,element.currentLocationLng);
   d.distance=google.maps.geometry.spherical.computeDistanceBetween(this.start,point) ;
   if(d.distance<1000)
   {
       d.id=element.driverId;
       this.heap.push(d);
   }
});
}
}

interface driver{
    name:string;
    id:number;
    distance:number;
    priority:number;
    price:number;
}