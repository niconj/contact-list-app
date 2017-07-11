import { Component, OnInit, Input } from '@angular/core';
import { IContact } from './../../models/contact';
import {Pipe} from '@angular/core';

@Component({
  selector: 'app-contact-list-detail',
  templateUrl: './contact-list-detail.component.html',
  styleUrls: ['./contact-list-detail.component.css']
})
export class ContactListDetailComponent {
  @Input() contact: IContact;
  constructor() { }

}
