import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Peoples } from './peoples';


@Injectable({
  providedIn: 'root'
})
export class PeoplesService {
  apiUrl = 'assets/adherents.json';

  constructor(private http: HttpClient) { }

  getPeoples(): Observable<Peoples[]> { // Notez le changement ici pour renvoyer un Observable de tableau de Book
    return this.http.get<Peoples[]>(this.apiUrl);
  }

  sortPeoplesAlphabetically(peoples: Peoples[]): Peoples[] {
    return peoples.sort((a, b) => a.nom.localeCompare(b.nom));
  }

  filterPeoplesByLetter(peoples: Peoples[], letter: string): Peoples[] {
    return peoples.filter(peoples => peoples.nom.startsWith(letter));
  }

  searchPeoplesByTitle(peoples: Peoples[], searchTerm: string): Peoples[] {
    return peoples.filter(peoples => peoples.nom.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
