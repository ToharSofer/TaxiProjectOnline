import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.scss']
})
export class BidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prc(){
    document.getElementById('prc').style.display="inline";
  }

  onKeyup(){
    document.getElementById('prc').style.display="none";
  }

}
