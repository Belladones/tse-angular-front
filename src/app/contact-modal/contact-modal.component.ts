import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.css'
})
export class ContactModalComponent {
  @Input() contactData: any;
  public display = 'none';

  open() {
    this.display = 'block';
  }

  close() {
    this.display = 'none';
  }
}
