import { Component, OnInit } from '@angular/core';
import { RegularUsers } from '../class/regular-users';
import { RegularUsersService } from '../services/regular-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private regularUserSer:RegularUsersService) { }

  user:RegularUsers=new RegularUsers();
  ngOnInit(): void {
    
  }
  
  login(){
    this.regularUserSer.Login(this.user).subscribe(x=>this.user=x);
  }
}
