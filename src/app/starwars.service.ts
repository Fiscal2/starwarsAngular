import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private readonly BASE_API_URL: string = "https://swapi.dev/api"

  constructor(private http: HttpClient) { }

  public getSpecificCharacter(): Observable<any> {
    return this.http.get<any>(`${this.BASE_API_URL}/people/1/`);
  }

  public getCharacters(): Observable<any> {
    return this.http.get<any>(`${this.BASE_API_URL}/people/`);
  }

  public getAllCharacters(): Observable<any>[] {
    const allCharacters: any = []
    let baseUrl = "https://swapi.dev/api/people/"
    for (let i = 1; i <= 82; i++) {
      this.http.get<any>(baseUrl).subscribe((response: any) => {
        allCharacters.push(response.results);
      });

      baseUrl = `https://swapi.dev/api/people/?page=${i}`;
    }
    return allCharacters;
  }
}
