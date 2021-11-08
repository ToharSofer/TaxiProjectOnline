import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taxiproject';
  flag = false;

  show(hide) {
    this.flag = !this.flag;
    if (hide) {
      document.getElementById("navbarNav").classList.remove("myshow");
      return;
    }
    if (this.flag)
      document.getElementById("navbarNav").classList.add("myshow");
    else
      document.getElementById("navbarNav").classList.remove("myshow");
  }
  
  constructor() {}

  ngOnInit() {

  }

}



