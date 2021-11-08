import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isThisTypeNode } from 'typescript';
import { RegularUsers } from '../class/regular-users';
import { TaxiDriver } from '../class/taxi-driver';
import { RegularUsersService } from '../services/regular-users.service';
import { TaxiDriverService } from '../services/taxi-driver.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  listDriver:Array<TaxiDriver>=new Array<TaxiDriver>();
  signInFrm:FormGroup
  constructor(private regularUserSer:RegularUsersService,private driver:TaxiDriverService,
    private router:Router
    ) { }
  user:RegularUsers=new RegularUsers();
  ngOnInit(): void {

    this.driver.GetAll().subscribe(x=> {this.listDriver=x})

    if (localStorage.getItem('user')) {
      this.newRegularUser.userId = Number(localStorage.getItem('user'))
      this.regularUserSer.Login(this.newRegularUser).subscribe(x => {
        console.log('x:', x)
        if (x != null) {
          this.newRegularUser = x
          this.regularUserSer.SignUp(this.newRegularUser); 
          this.showRegistration = false;
        }
      })
    }
    this.signInFrm=new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      connected: new FormControl(true)
    })
  }
  showRegistration = true;
  newRegularUser:RegularUsers=new RegularUsers();
  
  login() {

    this.newRegularUser.userId = this.signInFrm.controls['password'].value.trim()
    this.newRegularUser.userName = this.signInFrm.controls['username'].value.trim()

    if(this.listDriver.find(x=> x.DriverId==this.newRegularUser.userId))
    {
      this.router.navigate(['driver']);
      this.driver.idDriver=this.newRegularUser.userId;
    }
    else{  
    let connect = this.signInFrm.controls['connected'].value
    this.regularUserSer.Login(this.newRegularUser).subscribe(x => {
      console.log('x:', x)
      if (x != null) {       
        this.newRegularUser = x
        this.regularUserSer.SignUp(this.newRegularUser);
        this.showRegistration = false;
        this.router.navigate(['travel']);
        if (connect) {

          localStorage.setItem('user', String(this.newRegularUser.userId))
        }
        
      }
      else {
        document.querySelector('#tab-2').setAttribute('checked', 'checked')
      }
    });
  }
  }
}
 