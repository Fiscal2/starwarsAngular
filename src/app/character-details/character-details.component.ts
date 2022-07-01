import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './starwars.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  characterData = null

  constructor(private starwarsApi:StarwarsService) { }

  ngOnInit() {
    this.starwarsApi.getCharacterData().subscribe((data))=>{
      this.characterData = data; 
    }
  }

}
