import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';

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
    this.characterSorter();
  }

  // ngAfterViewInit() {
  //   const loader = document.getElementById("loaderWheel");
  //   loader?.classList.add("d-none")
  // }

  getAllCharacters() {
    this.starwarsApi.getAllPagesStarWarsData("people", 9).subscribe(data => {
      this.allCharacters.push(...data.results);
    });
  }

  characterSorter() {
    this.allCharacters.sort();
  }
}




