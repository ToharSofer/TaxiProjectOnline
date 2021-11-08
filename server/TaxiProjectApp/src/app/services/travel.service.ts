import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Travel } from '../class/travel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TravelService {

  url="https://localhost:44314/api/Travel/";

  constructor(private myhttp: HttpClient, private myrouter: Router) { }

  GetAll():Observable<Travel[]>
  {
    return this.myhttp.get<Travel[]>(this.url+"GetAll")
  }

  // GetCodeByName(name:string):Observable<number>
  // {
    
  //   return this.myhttp.get<number>(this.url+""+name)
  // }

  Post(newTravel:Travel):Observable<number>
  {
    return this.myhttp.post<number>(this.url+"Post",newTravel)
  }

  Put(upTravel:Travel):Observable<boolean>
  {
    return this.myhttp.put<boolean>(this.url+"Put",upTravel)
  }
  
  Delete(code:number):Observable<boolean>
  {
    return this.myhttp.delete<boolean>(this.url+"Delete"+code);
  }
}
