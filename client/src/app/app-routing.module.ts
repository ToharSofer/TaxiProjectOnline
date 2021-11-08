import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFixedTravelComponent } from './add-fixed-travel/add-fixed-travel.component';
import { BidComponent } from './bid/bid.component';
import { DriverComponent } from './driver/driver.component';
import { DriversComponent } from './drivers/drivers.component';
import { EditFixedTravelComponent } from './edit-fixed-travel/edit-fixed-travel.component';
import { FixedTravelComponent } from './fixed-travel/fixed-travel.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  { path: 'driver', component: DriverComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'fixed-travel', component: FixedTravelComponent },
  { path: 'add-fixed-travel', component: AddFixedTravelComponent },
  { path: 'edit-fixed-travel', component: EditFixedTravelComponent },
  { path: 'bid', component: BidComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'google-map', component: GoogleMapComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
