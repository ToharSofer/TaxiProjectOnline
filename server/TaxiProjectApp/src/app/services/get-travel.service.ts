import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { GetTravel } from '../class/get-travel';

@Injectable({
  providedIn: 'root'
})
export class GetTravelService {

  constructor(private socket:Socket) { }

  askTravel(tr:GetTravel){
    this.socket.emit('newtravel', tr)
  }
}
