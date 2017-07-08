import { ContactService } from './../../services/contact.service';
import { IContact } from './../../models/contact';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [ContactService]
})

export class ContactListComponent implements OnInit {
  contacts: IContact[];
  @Output() selectedContact = new EventEmitter<IContact>();

  constructor(private contactService: ContactService ) { }

  ngOnInit() {
    this.contactService.getContacts()
    .subscribe(result => { this.contacts = result; });
  }

  select(contact: IContact) {
    this.selectedContact.emit(contact);
  }
}
