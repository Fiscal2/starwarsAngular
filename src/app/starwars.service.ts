import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  private readonly BASE_API_URL: string = "https://swapi.dev/api/people/"

  constructor(private http: HttpClient) {}

  public getPeople() {
    
  }
}
