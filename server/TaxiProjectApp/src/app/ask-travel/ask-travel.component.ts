import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetTravel } from '../class/get-travel';
import { GetTravelService } from '../services/get-travel.service';

import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-ask-travel',
  templateUrl: './ask-travel.component.html',
  styleUrls: ['./ask-travel.component.scss']
})
export class AskTravelComponent implements OnInit, OnDestroy {

  trip:GetTravel
  private _docSub: Subscription;
  constructor(private asktravel: GetTravelService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.trip ={dep_lat:'3', dest_lat:'4', dep_lng:'5', dest_lng:'6'}
    this.asktravel.askTravel(this.trip);
  }

}
