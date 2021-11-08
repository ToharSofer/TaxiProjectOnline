import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaxiDriver } from '../class/taxi-driver';

@Injectable({
  providedIn: 'root'
})

export class TaxiDriverService {

  url="https://localhost:44314/api/TaxiDriver/";

  constructor(private myhttp: HttpClient, private myrouter: Router) { }

  GetAll():Observable<TaxiDriver[]>
  {
    return this.myhttp.get<TaxiDriver[]>(this.url+"GetAll")
  }

  // GetCodeByName(name:string):Observable<number>
  // {
    
  //   return this.myhttp.get<number>(this.url+""+name)
  // }

  Post(newTaxiDriver:TaxiDriver):Observable<number>
  {
    return this.myhttp.post<number>(this.url+"Post",newTaxiDriver)
  }

  Put(upTaxiDriver:TaxiDriver):Observable<boolean>
  {
    return this.myhttp.put<boolean>(this.url+"Put",upTaxiDriver)
  }
  
  Delete(id:number):Observable<boolean>
  {
    return this.myhttp.delete<boolean>(this.url+"Delete"+id);
  }
}
