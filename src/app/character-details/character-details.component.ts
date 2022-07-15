import { Component, OnInit } from '@angular/core';
import { StarwarsService, APIEndPoints } from '../starwars.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  allCharacters: any = []

  constructor(private starwarsApi: StarwarsService) { }

  ngOnInit() {
    this.paginatedCharacters();
  }

  // ngAfterViewInit() {
  //   const loader = document.getElementById("loaderWheel");
  //   loader?.classList.add("d-none")
  // }

  // getAllCharacters() {
  //   this.starwarsApi.getStarWarsData(APIEndPoints.PEOPLE, 9).subscribe(data => {
  //     this.allCharacters.push(...data.results)
  //   });
  // }

  paginatedCharacters(pageNumber: number = 1) {
    this.allCharacters = [];
    this.starwarsApi.getStarWarsPage(APIEndPoints.PEOPLE, pageNumber).subscribe(data => {
      this.allCharacters.push(...data.results)
    });
  }
}




