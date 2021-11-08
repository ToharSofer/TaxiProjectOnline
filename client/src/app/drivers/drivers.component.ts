import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { DriverReview } from '../class/driver-review';
import { TaxiDriver } from '../class/taxi-driver';
import { RegularUsersService } from '../services/regular-users.service';
import { TaxiDriverService } from '../services/taxi-driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  newReview="";

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  constructor(private taxiDriverSer:TaxiDriverService, private regularUser:RegularUsersService) { 
    
  }
  listTaxiDriver :Array<TaxiDriver>=new Array<TaxiDriver>();
  
  ngOnInit(): void {
    this.taxiDriverSer.GetAll().subscribe(x=>{
      this.listTaxiDriver=x.filter(d=>
       d.DriverId != 0
        );
    });
  }

  // addReview(dr:TaxiDriver){
  //   let driverReview = new DriverReview();
  //   driverReview.userId=this.regularUser.CurrentUser.userId;
  //   driverReview.driverReviewCode = dr.driverId;
  //   this.taxiDriverSer.addReview(driverReview).subscribe(x=> dr.reviews.push(x));
  // }
  

}
