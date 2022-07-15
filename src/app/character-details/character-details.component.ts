import { Component, OnInit } from '@angular/core';
import { StarwarsService, StarWarsEndPoints } from '../starwars.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  allCharacters: any = []

  constructor(private starwarsApi: StarwarsService) { }

  ngOnInit() {
    this.getAllCharacters();
  }

  // ngAfterViewInit() {
  //   const loader = document.getElementById("loaderWheel");
  //   loader?.classList.add("d-none")
  // }

  getAllCharacters() {
    this.starwarsApi.getStarWarsData(StarWarsEndPoints.PEOPLE, 9).subscribe(data => {
      this.allCharacters.push(...data.results)
    });
  }

  paginationCardBuilder(pageNumber = 0) {
    const groupedCharacterData = paginatedFetchEndpoint({endpoint: Number, pageCount: 9, grouped: true});
    
  }
}




