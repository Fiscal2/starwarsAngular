import { Component, OnInit } from '@angular/core';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger("homepageFade", [
      transition('start => finish',[
       query('.background-img', style({background-image: url("../../assets/warpspeed2.gif");}))
        animate('1s', style({background: "red"}))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void{
  }

}
