import { Time } from "@angular/common";
import { TaxiDriver } from "./taxi-driver";

export class Travel
{
    constructor
    (
         public travelCode?:number,
         public userId?:number,
         public startingPointLat?: string,
         public startingPointLng?:string,
         public destinatiPnpointLat?:string,
         public destinatiPnpointLng?:string,
         public departureTime?:Time,
         public fixedPrice?:any, 
         public dayInTheWeek?:number,
         public PriorityTime?:boolean,
         public PriorityDriverCode?:TaxiDriver,
         public PriorityPrice?:boolean,
    ){}
}