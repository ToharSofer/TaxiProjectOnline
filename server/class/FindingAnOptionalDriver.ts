import { TaxiDriverService } from "../services/taxi-driver.service";
import { TaxiDriver } from "./taxi-driver";
import {Message} from "src/app/class/message";
import { TravelComponent } from "../travel/travel.component";

export class FindingAnOptionalDriver {
    originPlaceId: string;
    destinationPlaceId: string;
    driver: TaxiDriver;
    price: boolean;
    time: boolean;
   
    taxiDriver: TaxiDriverService;
    listTaxiDriver: Array<TaxiDriver> = new Array<TaxiDriver>();

    constructor(originalPlace: string, destinationPlace: string, price: boolean, time: boolean, driver: TaxiDriver) {
        this.destinationPlaceId = destinationPlace;
        this.originPlaceId = originalPlace;
        this.driver = driver;
        this.price = price;
        this.time = time;
        this.taxiDriver.GetAll().subscribe(x => { this.listTaxiDriver = x });
        if(driver!=undefined){
        let message=new Message(this.driver.driverId);
        if(message.youTake()==true)
           alert(" הנהג"+driver.driverName+" בדרך אליך");
           else
           alert("הנהג המבוקש אינו פנוי בחר נסיעה חדשה");}
    }
    



}