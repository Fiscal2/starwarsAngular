import { Component, OnInit } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('queryAnimation', [
      transition('* => goAnimate', [
        // hide the inner elements
        query('.background-img', style({ "background": ("../../assets/warpspeed2.gif")})),

        // animate the inner elements in, one by one
        query('.background-img', animate(5000, style({ "background": "black" }))),
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  exp = '';
  constructor() { }

  ngOnInit(): void {
    this.goAnimate()
  }

  goAnimate() {
    this.exp = 'goAnimate';
  }
}
