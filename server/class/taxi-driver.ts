export class TaxiDriver
{
  constructor
  (
    public driverId?:number,
    public driverName?:string,            
    public pelephoneDriverNumber?:number,
    public vehicleTaxiCode?:number,
    public currentLocationLat?:number,
    public currentLocationLng?:number
  ){}
}