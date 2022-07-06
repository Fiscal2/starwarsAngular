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
    console.log(this.allCharacters);
  }
}




