import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //consulta a personajes
  private api_url: string = 'https://rickandmortyapi.com/api/character'


  public getAllCharacters(): Observable<any>{
    return this.http.get(this.api_url);
  }
  
}
