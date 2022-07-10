import { Component, OnInit } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('queryAnimation', [
      transition('* => goAnimate', [
       
        query('.background-img', style({
          "background": "url(../../assets/warpspeed2.gif)",
        })),

        query('.background-img', animate(5250, style({
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
