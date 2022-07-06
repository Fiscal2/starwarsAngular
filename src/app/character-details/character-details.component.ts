import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  characterData: any | undefined;

  allCharacters: any = []

  sortedCharacters: any = []

  constructor(private starwarsApi: StarwarsService) { }

  ngOnInit() {
    this.starwarsApi.getCharacters().subscribe(data => {
      this.characterData = data.results
    });

    this.groupedCharacters();
  }

  groupedCharacters() {
    this.starwarsApi.getAllCharacters().subscribe(data => {
      this.allCharacters.push(...data.results);
    });
  }

  characterSorter() {
    this.allCharacters.sort((a: any, b: any) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })
  }
}




