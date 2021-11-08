import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { TaxiDriverService } from '../services/taxi-driver.service';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  subscription:Subscription;
  constructor(private taxiDriverSer:TaxiDriverService) { }

  ngOnInit(): void {
    const source=interval(100000);
    this.subscription=source.subscribe(val=>this.taxiDriverSer.GetRide(this.taxiDriverSer.idDriver))
  }
  fun(){
    this.taxiDriverSer.GetRide(this.taxiDriverSer.idDriver);
  }
  ok(){
    this.taxiDriverSer.YouTake(this.taxiDriverSer.idDriver,1);
  }
  no(){
    this.taxiDriverSer.YouTake(this.taxiDriverSer.idDriver,2);
  }
}
