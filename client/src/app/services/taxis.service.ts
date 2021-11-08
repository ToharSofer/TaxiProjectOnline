import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Taxis } from '../class/taxis';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxisService {

  url="https://localhost:44314/api/Taxi/";

  constructor(private myhttp: HttpClient, private myrouter: Router) { }

  GetAll():Observable<Taxis[]>
  {
    return this.myhttp.get<Taxis[]>(this.url+"GetAll")
  }

  // GetCodeByName(name:string):Observable<number>
  // {
    
  //   return this.myhttp.get<number>(this.url+""+name)
  // }

  Post(newTaxi:Taxis):Observable<number>
  {
    return this.myhttp.post<number>(`${this.url}Post`,newTaxi)
  }

  Put(upTaxi:Taxis):Observable<boolean>
  {
    return this.myhttp.put<boolean>(this.url+"Put",upTaxi)
  }
  
  Delete(code:number):Observable<boolean>
  {
    return this.myhttp.delete<boolean>(this.url+"Delete"+code);
  }
}
