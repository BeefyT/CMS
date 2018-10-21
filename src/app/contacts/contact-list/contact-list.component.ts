import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Contact} from '../contacts.model';
import {ContactService} from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Output() contactSelectedEvent = new EventEmitter<Contact>();
  
  contacts: Contact[] = [];

  constructor(private clService: ContactService) { 
    this.contacts = this.clService.getContacts();
  }


  ngOnInit() {
  }

  onSelected(contact:Contact) {
    this.clService.contactSelectedEvent.emit(contact);
   }

 
}



