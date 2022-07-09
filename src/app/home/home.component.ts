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
        query('.background-img', style({
          "background": "url(../../assets/warpspeed2.gif)",
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center"
        })),

        // animate the inner elements in, one by one
        query('.background-img', animate(4500, style({
          "background": "black",
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center"
        }))),
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
