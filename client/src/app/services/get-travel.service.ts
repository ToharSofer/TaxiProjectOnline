import { Injectable } from '@angular/core';
//import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
 
import { GetTravel } from '../class/get-travel';
import { SocketService } from 'src/app/services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class GetTravelService {
//message = this.socket.fromEvent<String>('message')
  constructor(private socker : SocketService) { 

  }

  askTravel(tr:GetTravel){
    console.log('ask-travel')
   this.socker.connect();
    //this.socket.emit('newtravel', tr)
  }

  getMessage() {
    return 'hello'// this.socket.on('message').pipe(map((data) => data));
  }
}
