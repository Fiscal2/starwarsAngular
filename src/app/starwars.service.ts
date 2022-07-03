import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private readonly BASE_API_URL: string = "https://swapi.dev/api"

  constructor(private http: HttpClient) { }

  public getSpecificCharacter() {
    return this.http.get(`${this.BASE_API_URL}/people/1/`);
  }
}
