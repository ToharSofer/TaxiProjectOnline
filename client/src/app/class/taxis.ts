import { bindCallback } from "rxjs";

export class Taxis
{
    constructor
    (
        public vehicleTaxiCode?:number,
        public stationCode?: number,
        public numberOfSeats?: number,
    ){}
}