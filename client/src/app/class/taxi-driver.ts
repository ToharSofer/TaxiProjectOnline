import { DriverReview } from "./driver-review";

export class TaxiDriver
{
  constructor
  (
    public DriverId?:number,
    public DriverName?:string,            
    public PelephoneDriverNumber?:number,
    public VehicleTaxiCode?:number,
    public CurrentLocationLat?:number,
    public CurrentLocationLng?:number,
    public Prioritys?:number,
    public StationCode?:number,
    public Reviews? :Array<DriverReview>
  ){}
}