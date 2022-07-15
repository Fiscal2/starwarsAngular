import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  public getStarWarsPage(endpoint: string, page: number = 1): Observable<any> {
    if (page > 1) {
      return this.http.get<any>(`https://swapi.dev/api/${endpoint}/?page=${page}`);
    } else {
      return this.http.get<any>(`https://swapi.dev/api/${endpoint}`);
    }

  }

  public getStarWarsData(endpointName: StarWarsEndPoints, totalPages: number = 1): Observable<any> {
    const allLinks = this.allPaginationLinks(endpointName, totalPages);
    return this.mergeAllPaginatedData(allLinks);
  }

  private mergeAllPaginatedData(links: [string]): Observable<any> {
    return from(links).pipe(
      mergeMap((link: any) => this.http.get<any>(link))
    );
  }

  private allPaginationLinks(endpoint: string, pages: number): [string] {
    const allLinks: [string] = [`https://swapi.dev/api/${endpoint}/`];
    if (pages >= 2) {
      for (let i = 2; i <= pages; i++) {
        allLinks.push(`https://swapi.dev/api/people/?page=${i}`);
      }
    }
    return allLinks;
  }
}

export enum StarWarsEndPoints {
  FILMS = 'films',
  PEOPLE = 'people',
  PLANETS = 'planets',
  SPECIES = 'species',
  STARSHIPS = 'starships',
  VEHICLES = 'vehicles'
}

export enum PageNumbersPerEndPoint {
  DEFAULT = 1,
  PEOPLE = 9,
  STARSHIPS = 4,
}
