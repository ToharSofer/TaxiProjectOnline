import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
socket
  constructor() { }

  connect(){
    this.socket = io('http://localhost:5050')
    return new Observable(observer => {
      this.socket.on('back', (data) => {
        console.log("Received message from Websocket Server")
        console.log(data)
       return data;
      })
  })
}
}
