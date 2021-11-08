import { Component, OnInit } from '@angular/core';
import { RegularUsers } from '../class/regular-users';
import { Taxis } from '../class/taxis';
import { Travel } from '../class/travel';
import { RegularUsersService } from '../services/regular-users.service';
import { TaxisService } from '../services/taxis.service';
import { TravelService } from '../services/travel.service';

@Component({
  selector: 'app-add-fixed-travel',
  templateUrl: './add-fixed-travel.component.html',
  styleUrls: ['./add-fixed-travel.component.scss']
})
export class AddFixedTravelComponent implements OnInit {

  // time = {hour: 13, minute: 30};
  
  constructor(private taxisSer:TaxisService,
    private travelSer:TravelService,
    private userSer:RegularUsersService) { }

  addFixedTravel:Taxis=new Taxis();
  addTravel:Travel=new Travel();
  user:RegularUsers=new RegularUsers();

  ngOnInit(): void {
  }

  addFixedTravels(){
   this.taxisSer.Post(this.addFixedTravel).subscribe(a=>console.log(a))
  &&  this.travelSer.Post(this.addTravel) && this.userSer.Post(this.user);

   console.log(this.addFixedTravel.numberOfSeats && this.addTravel.dayInTheWeek && this.user.userName);
  }
}
