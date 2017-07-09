import { IContact } from './../../models/contact';
import { Component, OnInit } from '@angular/core';
import { ContactListComponent } from './../contact-list/contact-list.component';
import { ContactListDetailComponent } from './../contact-list-detail/contact-list-detail.component';

@Component({
  selector: 'app-contact-list-manager',
  templateUrl: './contact-list-manager.component.html',
  styleUrls: ['./contact-list-manager.component.css']
})
export class ContactListManagerComponent {
  selectedContact: IContact;

  setContact(contact: IContact) {
    const activeContact = this.selectedContact;

    if (activeContact != null) {
      activeContact.selected = false;
    }

    contact.selected = true;
    this.selectedContact = contact;
  }
}
