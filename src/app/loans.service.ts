import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Loan} from "./loans";
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  apiUrl = 'assets/datas/loans.json';
  constructor(private http: HttpClient) { }

  getLoan(): Observable<Loan[]> {
    return this.http.get<Loan[]>(this.apiUrl);
  }

}
