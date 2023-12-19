import {Component, OnInit} from '@angular/core';
import {BooksService} from "../books.service";
import {Book} from "../book";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  searchInput: string = '';
  filterLetter: string = '';

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
        this.filteredBooks = data; // Initialise filteredBooks avec tous les livres
      },
      error => console.error(error)
    );
  }

  updateBookDisplay(): void {
    let updatedBooks = this.books;
    if (this.filterLetter) {
      updatedBooks = this.booksService.filterBooksByLetter(updatedBooks, this.filterLetter);
    }
    if (this.searchInput) {
      updatedBooks = this.booksService.searchBookByTitle(updatedBooks, this.searchInput);
    }
    this.filteredBooks = updatedBooks;
  }

  onLetterClick(letter: string): void {
    this.filterLetter = this.filterLetter === letter ? '' : letter;
    this.updateBookDisplay();
  }

  onSearchChange(): void {
    this.updateBookDisplay();
  }

  resetFilter(): void {
    this.filterLetter = '';
    this.searchInput = '';
    this.filteredBooks = this.books;
  }
}
