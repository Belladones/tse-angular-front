import {Component, OnInit, ViewChild} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ContactModalComponent} from "../contact-modal/contact-modal.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ContactModalComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  contact = {
    email: '',
    message: ''
  };
  // @ts-ignore
  @ViewChild('modal') modal: ContactModalComponent;

  onSubmit() {
    this.modal.open();
  }
}
