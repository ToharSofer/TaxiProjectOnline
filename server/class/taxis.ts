import { bindCallback } from "rxjs";

export class Taxi
{
    constructor
    (
        public vehicleTaxiCode?:number,
        public stationCode?: number,
        public numberOfSeats?: number,
    ){}
}