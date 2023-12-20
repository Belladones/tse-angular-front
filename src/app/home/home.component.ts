import {Component, OnInit} from '@angular/core';
import {BooksService} from "../books.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Book} from "../book";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  books: Book[] = [];
  constructor(private booksService: BooksService) { }


  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
      },
      error => console.error(error)
    );
  }

  flipCard(): void {
    const card = document.querySelector('.card');
    if (card) {
      card.classList.toggle('flipped');
    }
  }

}
