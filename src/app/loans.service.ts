import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Loans} from "./loans";

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  apiUrl = 'assets/locations.json';

  constructor(private http: HttpClient) { }

  getCar(): Observable<Loans> {
    return this.http.get<Loans>(this.apiUrl);
  }
}
