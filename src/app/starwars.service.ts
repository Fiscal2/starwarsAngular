import { Injectable } from '@angular/core';
import { HttpClient } from ‘@angular/common/http’;

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http:HttpClient) {
    return this.http.get('https://swapi.dev/api/'); 
   }
}
