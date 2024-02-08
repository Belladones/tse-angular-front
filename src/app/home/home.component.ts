import {Component, OnInit} from '@angular/core';
import {BooksService} from "../books.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list"
import {Book} from "../book";
import {RouterLink} from "@angular/router";


export interface Tile {
  h1: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
  class: string;
  img: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  books: Book[] = [];
  constructor(private booksService: BooksService) { }
  tiles: Tile[] = [
    { h1: "Wide Selection", text: "We offer a diverse online library, ranging from current bestsellers to timeless classics. Whatever your literary taste, you're sure to find something that will pique your interest.", cols: 4, rows: 2, color: '#2D133A', class: "bento b1", img: "" },
    { h1: "", text: '', cols: 3, rows: 2, color: '#2D133A', class: "bento b2", img: "assets/images/logo_luna.svg"  },
    { h1: "test", text: 'content', cols: 2, rows: 4, color: '#2D133A', class: "bento b3", img: ""  },
    { h1: "User Friendly", text: "Our user-friendly interface makes searching, selecting, and renting books as easy as can be. You're just a few clicks away from your next literary adventure.", cols: 3, rows: 2, color: '#2D133A' , class: "bento b4", img: "" },
    { h1: "Reviews and Recommendations", text: "Discover member reviews and recommendations to help you find your next read.", cols: 3, rows: 2, color: '#2D133A' , class: "bento b5", img: "" },
    { h1: "Affordable Rates", text: "Reading should not be a luxury. At Luna Loans, we offer competitive pricing so that everyone can access exciting books without breaking the bank.", cols: 4, rows: 2, color: '#2D133A' , class: "bento b6", img: "" },
    { h1: "No Commitment", text: "No long-term contracts or commitments. You rent and return books at your own pace, no pressure.", cols: 3, rows: 2, color: '#2D133A', class: "bento b7", img: ""  },
  ];

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
