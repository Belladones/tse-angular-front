import {Component, OnInit} from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {Loan} from "../loans";
import {LoansService} from "../loans.service";
import {BooksService} from "../books.service";
import {PeoplesService} from "../peoples.service";
import {FormsModule} from "@angular/forms";
import {forkJoin} from "rxjs";
import {Book} from "../book";
import {Peoples} from "../peoples";

interface ExtendedLoan extends Loan {
  book?: Book;
  user?: Peoples;
}

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent implements OnInit {
  loans: ExtendedLoan[] = [];
  allLoans: ExtendedLoan[] = []; // Ajoutez ceci pour stocker tous les prêts
  searchTerm: string = ''; // Ajoutez cette ligne

  constructor(private loansService: LoansService, private bookService: BooksService, private peoplesService: PeoplesService) { }

  ngOnInit() {
    this.getLoans();
  }

  getLoans() {
    this.loansService.getLoan().subscribe(
      (loansData: Loan[]) => {
        forkJoin([
          this.bookService.getBooks(),
          this.peoplesService.getPeoples()
        ]).subscribe(([books, peoples]) => {
          this.allLoans = loansData.map(loan => ({ // Utilisez allLoans ici
            ...loan,
            book: books.find(book => book.book_id === loan.id_book),
            user: peoples.find(people => people.id_adherent === loan.id_user)
          }));
          this.loans = [...this.allLoans]; // Copiez allLoans dans loans pour l'affichage initial
        });
      },
      error => console.error(error)
    );
  }

  filterLoans() {
    if (!this.searchTerm) {
      this.loans = [...this.allLoans]; // Réinitialisez à tous les prêts si searchTerm est vide
      return;
    }

    const lowerSearchTerm = this.searchTerm.toLowerCase();

    this.loans = this.allLoans.filter(loan => // Filtrez à partir de allLoans
      loan.book?.titre.toLowerCase().includes(lowerSearchTerm) ||
      loan.user?.nom.toLowerCase().includes(lowerSearchTerm) ||
      loan.user?.prenom.toLowerCase().includes(lowerSearchTerm) ||

      `${loan.book?.book_id}`.includes(lowerSearchTerm) // Utilisez includes au lieu de === pour une correspondance partielle
    );
  }
}
