import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Adherent} from "./adherents";

@Injectable({
  providedIn: 'root'
})
export class AdherentsService {
  apiUrl = 'assets/adherents.json';

  constructor(private http: HttpClient) { }

  getCar(): Observable<Adherent> {
    return this.http.get<Adherent>(this.apiUrl);
  }
}
