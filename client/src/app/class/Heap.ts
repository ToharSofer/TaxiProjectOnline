import { TaxiDriverService } from "../services/taxi-driver.service";
import { TaxiStationsService } from "../services/taxi-stations.service";
import { TaxiDriver } from "./taxi-driver";
import { TaxiStations } from "./taxi-stations";

export class greko {
    start: google.maps.LatLng;
    heap: Array<driver> = new Array<driver>();
    station: Array<TaxiStations> = new Array<TaxiStations>();
    listTaxiDriver: Array<TaxiDriver> = new Array<TaxiDriver>();
t:TaxiDriverService;
    constructor(start: google.maps.LatLng,station:Array<TaxiStations>, listTaxiDriver: Array<TaxiDriver>) { 
        this.station=station;
        this.listTaxiDriver=listTaxiDriver;    
        this.start = start;
    }
    build(start: google.maps.LatLng,station:Array<TaxiStations>, listTaxiDriver: Array<TaxiDriver>) {
       
        // in this loop i build list with all the driver that in 1000 km from the client
        this.listTaxiDriver.forEach(element => {
            let d: driver;
            let point = new google.maps.LatLng(element.currentLocationLat, element.currentLocationLng);
            d.distance = google.maps.geometry.spherical.computeDistanceBetween(this.start, point);
            if (d.distance < 1000) {
                d.name = element.driverName;
                d.id = element.driverId;
                d.priority = element.priority;
                let stat = this.station.find(x => x.stationCode == element.stationCode);
                d.price = stat.pricePerKilometer;
                this.heap.push(d);
            }
        });
    }
    fix(parameter: string) {
        //fix the heap just with this paramter
        this.heap.sort((a, b) => (a[parameter] < b[parameter]) ? 1 : -1);
    }
    fixByTime(parameter: string) {
        //fix the heap  with this paramter and  time 
        for (let index = this.heap.length - 1; index >= (this.heap.length - 1)/2; index++) {
            if (this.heap[index][parameter] < this.heap[index / 2][parameter] && this.heap[index].distance <= (this.heap[index / 2].distance + 100)) {
                let temp = this.heap[index / 2];
                this.heap[index / 2] = this.heap[index];
                this.heap[index] = temp;
            }
        }
    }
    takeRide() {
        let take = false;
        while (this.heap != null && take == false) {
            let driver = this.heap.pop();
            let message=this.t.youTake(driver.id);
            // if (message = this.taxiDriver.youTake(driver.id)) {
            //     alert(" הנהג" + driver.name + " בדרך אליך ");//הודעה על המסך שם הנהג המרחק מהלקוח בקלומטרים ומחיר משוער
            //     take = true;
            //     this.taxiDriver.priority(driver.id);
        //     }
        // }
        // if(take==false)
        alert("מצטערים אך אין מוניות פנויות נסה שוב בזמן אחר");
    }
}
}
interface driver {
    name: string;
    id: number;
    distance: number;
    priority: number;
    price: number;
}