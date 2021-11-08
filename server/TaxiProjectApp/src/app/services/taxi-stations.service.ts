import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { TaxiStation } from '../class/taxi-stations';

@Injectable({
  providedIn: 'root'
})
export class TaxiStationsService {

  url="https://localhost:44314/api/TaxiStation/";

  constructor(private myhttp: HttpClient, private myrouter: Router) { }

  GetAll():Observable<TaxiStation[]>
  {
    return this.myhttp.get<TaxiStation[]>(this.url+"GetAll")
  }

  // GetCodeByName(name:string):Observable<number>
  // {
    
  //   return this.myhttp.get<number>(this.url+""+name)
  // }

  Post(newTaxiStation:TaxiStation):Observable<number>
  {
    return this.myhttp.post<number>(this.url+"Post",newTaxiStation)
  }

  Put(upTaxiStation:TaxiStation):Observable<boolean>
  {
    return this.myhttp.put<boolean>(this.url+"Put",upTaxiStation)
  }
  
  Delete(code:number):Observable<boolean>
  {
    return this.myhttp.delete<boolean>(this.url+"Delete"+code);
  }
}
