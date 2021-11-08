import { Component, OnInit } from '@angular/core';
import { RegularUsers } from '../class/regular-users';
import { Travel } from '../class/travel';
import { RegularUsersService } from '../services/regular-users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private regularUsersSer: RegularUsersService,
              private router:Router) { }

  ngOnInit(): void {
    this.regularUsersSer.GetAll().subscribe(x => this.userl = x);
    console.log(this.userl);
  }
  userl: Array<RegularUsers> = new Array<RegularUsers>();
  user: RegularUsers = new RegularUsers();

  signUp() {
    this.regularUsersSer.Post(this.user).subscribe(
      userId => {
        this.user.userId = userId;

        // if (userId == null)
        //   console.log("בחר שם אחר");
        // else
        //   console.log(userId, this.user.userName);
      })
      this.router.navigate(['travel']);
      this.regularUsersSer.SignUp(this.user);
  }
}
