import { Component, OnInit } from '@angular/core';
import { StarwarsService, APIEndPoints } from '../starwars.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  allStarships: any = [];

  constructor(private starwarsApi: StarwarsService) { }

  ngOnInit(): void {
    this.paginatedStarships();
  }

  paginatedStarships(pageNumber: number = 1) {
    this.allStarships = [];
    this.starwarsApi.getStarWarsPage(APIEndPoints.STARSHIPS, pageNumber).subscribe(data => {
      this.allStarships.push(...data.results)
    });
  }

}
