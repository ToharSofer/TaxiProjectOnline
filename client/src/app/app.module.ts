import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { AddFixedTravelComponent } from './add-fixed-travel/add-fixed-travel.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskTravelComponent } from './ask-travel/ask-travel.component';
import { BidComponent } from './bid/bid.component';
import { DriverComponent } from './driver/driver.component';
import { DriversComponent } from './drivers/drivers.component';
import { EditFixedTravelComponent } from './edit-fixed-travel/edit-fixed-travel.component';
import { FixedTravelComponent } from './fixed-travel/fixed-travel.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { weekDayPipe } from './pipes/weekday.pipe';
import { DriverReviewService } from './services/driver-review.service';
import { GetTravelService } from './services/get-travel.service';
import { RegularUsersService } from './services/regular-users.service';
import { TaxiDriverService } from './services/taxi-driver.service';
import { TaxiStationsService } from './services/taxi-stations.service';
import { TaxisService } from './services/taxis.service';
import { TravelService } from './services/travel.service';
import { SignupComponent } from './signup/signup.component';
import { TravelComponent } from './travel/travel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    BidComponent,
    FixedTravelComponent,
    AddFixedTravelComponent,
    DriversComponent,
    EditFixedTravelComponent,
    TravelComponent,
    DriverComponent,
    weekDayPipe,
    AskTravelComponent,
    GoogleMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6tUYPUKz1B16PPmq1rpJbbF_QMP3tsG0',
      language:'he',
      libraries: ['geometry', 'places'],
    }),
    
  ],
  providers: [DriverReviewService,
    TaxiDriverService,
    TaxiStationsService,
    TravelService,
    RegularUsersService,
    TaxisService,
    GetTravelService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
