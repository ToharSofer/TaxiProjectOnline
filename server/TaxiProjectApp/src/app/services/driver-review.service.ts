import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { url } from 'inspector';
import { DriverReview } from '../class/driver-review';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})

export class DriverReviewService {

  url="https://localhost:44314/api/DriverReview/";

  constructor(private myhttp: HttpClient, private myrouter: Router) { }

  GetAll():Observable<DriverReview[]>
  {
    return this.myhttp.get<DriverReview[]>(this.url+"GetAll")
  }

  // GetCodeByName(name:string):Observable<number>
  // {
    
  //   return this.myhttp.get<number>(this.url+""+name)
  // }

  Post(newDriverReview:DriverReview):Observable<number>
  {
    return this.myhttp.post<number>(this.url+"Post",newDriverReview)
  }

  Put(upDriverReview:DriverReview):Observable<boolean>
  {
    return this.myhttp.put<boolean>(this.url+"Put",upDriverReview)
  }
  
  Delete(code:number):Observable<boolean>
  {
    return this.myhttp.delete<boolean>(this.url+"Delete"+code);
  }

}
