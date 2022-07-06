import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  characterData: any | undefined;

  const allCharacters = []

  constructor(private starwarsApi: StarwarsService) { }

  ngOnInit() {
    this.starwarsApi.getCharacters().subscribe(data => {
      this.characterData = data.results
    });

    this.starwarsApi.getAllCharacters().subscribe(data => console.log(data.results));

  }
  groupedCharacters() {
    this.starwarsApi.getAllCharacters().subscribe(data => this.allCharacters.push.concat(1)(data.results));

  }
}




