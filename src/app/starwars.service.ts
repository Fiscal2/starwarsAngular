import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, expand, reduce, mergeMap, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private readonly BASE_API_URL: string = "https://swapi.dev/api"

  constructor(private http: HttpClient) { }

  public getSpecificStarWarsData(endpoint: string): Observable<any> {
    return this.http.get<any>(`${this.BASE_API_URL}/${endpoint}/`);
  }

  public getAllPagesStarWarsData(endpointName: string, pageNum: number): Observable<any> {
    const allLinks = this.allPaginationLinks(endpointName, pageNum);
    return this.mergeAllPaginatedData(allLinks);
  }

  private mergeAllPaginatedData(links: []): Observable<any> {
    return from(links).pipe(
      mergeMap((link: any) => this.http.get<any>(link))
    );
  }

  private allPaginationLinks(endpoint: string, pages: number) {
    const allLinks: any = [`https://swapi.dev/api/${endpoint}/`];
    for (let i = 2; i <= pages; i++) {
      allLinks.push(`https://swapi.dev/api/people/?page=${i}`);
    }
    return allLinks;
  }



}
