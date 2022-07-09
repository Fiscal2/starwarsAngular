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
        query('h1', style({ opacity: 0 })),

        // animate the inner elements in, one by one
        query('h1', animate(1000, style({ opacity: 1 }))),
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  exp = '';
  constructor() { }

  ngOnInit(): void {
  }

  goAnimate() {
    this.exp = 'goAnimate';
  }
}
