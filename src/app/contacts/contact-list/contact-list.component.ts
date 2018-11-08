import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Contact} from '../contacts.model';
import {ContactService} from '../contact.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Output() contactSelectedEvent = new EventEmitter<Contact>();
  
  contacts: Contact[] = [];
  contactId: string = '';

  constructor(private clService: ContactService) { 
    this.contacts = this.clService.getContacts();
    console.log(this.contacts);
  }


  ngOnInit() {
   /* this.clService.contactChangedEvent
    .subscribe(
    (contacts:Contact)=>{
      this.contacts[] = contacts;
    }*/
  }

  onSelected(contact:Contact) {
    this.clService.contactSelectedEvent.emit(contact);
   }

 
}



