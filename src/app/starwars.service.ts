import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, expand, reduce, mergeMap, Observable, from } from 'rxjs';

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

  public getStarWarsData(endpoint: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_API_URL}/${endpoint}/`);
  }

  public getAllCharacters() {
    const allLinks = this.createAllPaginationLinks();
    return from(allLinks).pipe(
      mergeMap((link: any) => this.http.get<any>(link))
    );
  }

  private createAllPaginationLinks() {
    const allLinks: any = ["https://swapi.dev/api/people/"];
    for (let i = 2; i <= 9; i++) {
      allLinks.push(`https://swapi.dev/api/people/?page=${i}`)
    }
    return allLinks
  }



}
