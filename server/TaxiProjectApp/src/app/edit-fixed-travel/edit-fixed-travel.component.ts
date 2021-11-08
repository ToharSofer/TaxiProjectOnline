import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-fixed-travel',
  templateUrl: './edit-fixed-travel.component.html',
  styleUrls: ['./edit-fixed-travel.component.scss']
})
export class EditFixedTravelComponent implements OnInit {

  time = {hour: 13, minute: 30};

  constructor() { }

  ngOnInit(): void {
  }

}
