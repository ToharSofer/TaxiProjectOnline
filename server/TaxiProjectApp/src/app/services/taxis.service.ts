import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Taxi } from '../class/taxis';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxisService {

  url="https://localhost:44314/api/Taxi/";

  constructor(private myhttp: HttpClient, private myrouter: Router) { }

  GetAll():Observable<Taxi[]>
  {
    return this.myhttp.get<Taxi[]>(this.url+"GetAll")
  }

  // GetCodeByName(name:string):Observable<number>
  // {
    
  //   return this.myhttp.get<number>(this.url+""+name)
  // }

  Post(newTaxi:Taxi):Observable<number>
  {
    return this.myhttp.post<number>(`${this.url}Post`,newTaxi)
  }

  Put(upTaxi:Taxi):Observable<boolean>
  {
    return this.myhttp.put<boolean>(this.url+"Put",upTaxi)
  }
  
  Delete(code:number):Observable<boolean>
  {
    return this.myhttp.delete<boolean>(this.url+"Delete"+code);
  }
}
