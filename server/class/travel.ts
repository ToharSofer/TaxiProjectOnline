import { Time } from "@angular/common";

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
    ){}
}