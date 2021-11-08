import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaxiDriver } from '../class/taxi-driver';
import { DriverReview } from '../class/driver-review';
import { Ride } from '../class/Ride';

@Injectable({
  providedIn: 'root'
})

export class TaxiDriverService {


  url = "https://localhost:44314/api/TaxiDriver/";

  constructor(private myhttp: HttpClient, private myrouter: Router) { }
  idDriver:number=20546238;

  GetAll(): Observable<TaxiDriver[]> {
    return this.myhttp.get<TaxiDriver[]>(this.url + "GetAll")
  }
  priority(id: number): Observable<boolean> {
    return this.myhttp.put<boolean>(this.url + "priority", id);
  }

  Post(newTaxiDriver: TaxiDriver): Observable<number> {
    return this.myhttp.post<number>(this.url + "Post", newTaxiDriver)
  }

  Put(upTaxiDriver: TaxiDriver): Observable<boolean> {
    return this.myhttp.put<boolean>(this.url + "Put", upTaxiDriver)
  }

  Delete(id: number): Observable<boolean> {
    return this.myhttp.delete<boolean>(this.url + "Delete" + id);
  }

  // addReview(driverReview: DriverReview):Observable<DriverReview> {
  //   throw new Error('Method not implemented.');
  // }
  GetRide(id: number): Observable<Ride> {
    return this.myhttp.get<Ride>(this.url  + id);
  }
  SetRide(ride: Ride): Observable<boolean> {
    console.log(this.url + ride.idDriver)
    return this.myhttp.get<boolean>(this.url + ride.idDriver);
  }
  YouTake(id: number, take: number) {
    this.myhttp.get<void>(this.url+ id + "," + take);
  }
}
