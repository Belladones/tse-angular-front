import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./book";


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiUrl = 'assets/datas/book.json';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> { // Notez le changement ici pour renvoyer un Observable de tableau de Book
    return this.http.get<Book[]>(this.apiUrl);
  }

  sortBooksAlphabetically(books: Book[]): Book[] {
    return books.sort((a, b) => a.titre.localeCompare(b.titre));
  }

  filterBooksByLetter(books: Book[], letter: string): Book[] {
    return books.filter(book => book.titre.startsWith(letter));
  }

  searchBookByTitle(books: Book[], searchTerm: string): Book[] {
    return books.filter(book => book.titre.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}

