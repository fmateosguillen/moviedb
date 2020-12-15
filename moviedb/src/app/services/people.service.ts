import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse, Person } from '../interfaces/people-response.interface';
import { HttpClient } from '@angular/common/http';


const PEOPLE_URL = 'https://api.themoviedb.org/3/person/popular?api_key=';
const API_KEY = 'a87774390370f1a5a96ce96826cfba68';
const RESULT_CONFIG = '&language=es-ES&page=1';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  public getPeopleList(): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>(PEOPLE_URL + API_KEY + RESULT_CONFIG);
  }

  /*
  public getActorsId(peopleService: PeopleService): number[] {
    let listadoActores: Person[] = peopleService.getPeopleList().subscribe(resp => {
      listadoActores = resp.results;
    });

    let listadoId: number[];
    return listadoId;
  }
  */

}
