import { TaxiDriverService } from "../services/taxi-driver.service";
import { TaxiStationsService } from "../services/taxi-stations.service";
import { TaxiDriver } from "./taxi-driver";
import { TaxiStation } from "./taxi-stations";
import { Taxi } from "./taxis"
import { Message } from "./Message";
export class Heap {
    start: google.maps.LatLng;
    listTaxiDriver: Array<TaxiDriver> = new Array<TaxiDriver>();
    taxiDriver: TaxiDriverService;
    heap: Array<driver> = new Array<driver>();
    station: Array<TaxiStation> = new Array<TaxiStation>();
    taxiStationSer: TaxiStationsService;
    

    constructor(start: google.maps.LatLng) {
        this.taxiStationSer.GetAll().subscribe(x => this.station = x);
        this.start = start;
        this.taxiDriver.GetAll().subscribe(x => { this.listTaxiDriver = x });
    }
    build() {
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
        for (let index = this.heap.length - 1; index >= 0; index++) {
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
            let message = new Message(driver.id);
            if (message.youTake() == true) {
                alert(" הנהג" + driver.name + " בדרך אליך ");
                take = true;
            }
        }
        if(take==false)
        alert("מצטערים אך אין מוניות פנויות נסה שוב בזמן אחר");
    }
}

interface driver {
    name: string;
    id: number;
    distance: number;
    priority: number;
    price: number;
}