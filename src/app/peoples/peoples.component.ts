import {Component, OnInit} from '@angular/core';
import { PeoplesService } from '../peoples.service';
import { Peoples } from '../peoples';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-peoples',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './peoples.component.html',
  styleUrl: './peoples.component.css'
})


export class PeoplesComponent implements OnInit {
  people: Peoples[] = [];
  filteredPeoples: Peoples[] = [];
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  searchInput: string = '';
  filterLetter: string = '';

  constructor(private peoplesService: PeoplesService) { }

  ngOnInit(): void {
    this.getPeoples();
  }

  getPeoples(): void {
    this.peoplesService.getPeoples().subscribe(
      (data: Peoples[]) => {
        this.people = data;
        this.filteredPeoples = data; // Initialise filteredPeoples avec tous les livres
      },
      error => console.error(error)
    );
  }

  updatePeopleDisplay(): void {
    let updatedPeoples = this.people;
    if (this.filterLetter) {
      updatedPeoples = this.peoplesService.filterPeoplesByLetter(updatedPeoples, this.filterLetter);
    }
    if (this.searchInput) {
      updatedPeoples = this.peoplesService.searchPeoplesByTitle(updatedPeoples, this.searchInput);
    }
    this.filteredPeoples = updatedPeoples;
  }

  onLetterClick(letter: string): void {
    this.filterLetter = this.filterLetter === letter ? '' : letter;
    this.updatePeopleDisplay();
  }

  onSearchChange(): void {
    this.updatePeopleDisplay();
  }

  resetFilter(): void {
    this.filterLetter = '';
    this.searchInput = '';
    this.filteredPeoples = this.people;
  }
}
