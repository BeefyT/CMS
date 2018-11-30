import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Contact} from '../contacts.model';
import {ContactService} from '../contact.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Output() contactSelectedEvent = new EventEmitter<Contact>();
  
  contacts: Contact[] = [];
  contactId: string = '';
  term: string = '';

  private subscription: Subscription;

  constructor(private clService: ContactService) { 
    this.contacts = this.clService.getContacts();
    console.log(this.contacts);
  }


  ngOnInit() {
    this.contacts = this.clService.getContacts();
    this.subscription = this.clService.contactListChangedEvent
      .subscribe(
        (contactsList: Contact[]) => {
          this.contacts = contactsList;
        }
      );
  }

  onSelected(contact:Contact) {
    this.clService.contactSelectedEvent.emit(contact);
   }

   onKeyPress(value:string){
     this.term = value;
   }

 
}



