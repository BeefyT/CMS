import { Injectable, EventEmitter } from '@angular/core';
import {Contact} from './contacts.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

contactSelectedEvent = new EventEmitter<Contact>();

contacts: Contact[] = [];

  constructor() { 
    this.contacts = MOCKCONTACTS;
  }


  getContacts(){
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    
    for(let i = 0; i<this.contacts.length; i++){
      if(Contact[i].id === id){
        return Contact[i];
      }
    }
    return null;
   } 


}
