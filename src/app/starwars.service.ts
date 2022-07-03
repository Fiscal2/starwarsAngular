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
}
