import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { from, Observable } from 'rxjs';
import { RegularUsers } from '../class/regular-users';

const options = {
  'Content-Type':'application/json'
}


@Injectable({
  providedIn: 'root'
})

export class RegularUsersService {

  

url="https://localhost:44314/api/RegularUser/";

  constructor(private myhttp: HttpClient, private myrouter: Router) { }
  private regularUserIn:RegularUsers;
  loginevent = new EventEmitter<boolean>()


  GetAll():Observable<RegularUsers[]>
  {
    return this.myhttp.get<RegularUsers[]>(this.url+"GetAll")
  }

  // GetCodeByName(name:string):Observable<number>
  // {
    
  //   return this.myhttp.get<number>(this.url+""+name)
  // }

  Post(newRegularUser:RegularUsers):Observable<number>
  {
    return this.myhttp.post<number>(`${this.url}Post`,newRegularUser)
  }
  

  Put(upRegularUser:RegularUsers):Observable<boolean>
  {
    return this.myhttp.put<boolean>(this.url+"Put",upRegularUser)
  }
  
  Delete(id:number):Observable<boolean>
  {
    return this.myhttp.delete<boolean>(this.url+"Delete"+id);
  }

  //הרשמת משתמש
  SignUp(existUser:RegularUsers)
  {
    this.regularUserIn=existUser;
    this.loginevent.emit(true);
  }
  //התחברות משתמש
  Login(existUser:RegularUsers):Observable<RegularUsers>
  {
    console.log(existUser)

    return this.myhttp.post<RegularUsers>(this.url+"Connect", existUser );
  }

  get CurrentUser():RegularUsers{
    return this.regularUserIn;
  }
}
