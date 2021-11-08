import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BidComponent } from './bid/bid.component';
import { FixedTravelComponent } from './fixed-travel/fixed-travel.component';
import { AddFixedTravelComponent } from './add-fixed-travel/add-fixed-travel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { DriversComponent } from './drivers/drivers.component';
import { EditFixedTravelComponent } from './edit-fixed-travel/edit-fixed-travel.component';
import { TravelComponent } from './travel/travel.component';
import { DriverComponent } from './driver/driver.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DriverReviewService } from './services/driver-review.service';
import { TaxiDriverService } from './services/taxi-driver.service';
import { TaxiStationsService } from './services/taxi-stations.service';
import { TravelService } from './services/travel.service';
import { RegularUsersService } from './services/regular-users.service';
import { TaxisService } from './services/taxis.service';
import { weekDayPipe } from './pipes/weekday.pipe';
import { GogComponent } from './gog/gog.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map/google-map.component';
import { MapComponent } from './map/map.component';


const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

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
    GogComponent,
    GoogleMapComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA6tUYPUKz1B16PPmq1rpJbbF_QMP3tsG0',
      language:'he',
      libraries: ['places']
    }),
    SocketIoModule.forRoot(config)
  ],
  providers: [
    DriverReviewService,
    TaxiDriverService,
    TaxiStationsService,
    TravelService,
    RegularUsersService,
    TaxisService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
