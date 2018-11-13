import { Injectable, EventEmitter } from '@angular/core';
import {Contact} from './contacts.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

contactListChangedEvent = new Subject<Contact[]>();

contactSelectedEvent = new EventEmitter<Contact>();

contactChangedEvent = new EventEmitter<Contact[]>();


contacts: Contact[] = [];
maxContactId: number;

  constructor() { 
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }


  getContacts(){
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    
    for(const contact of this.contacts){
      if(contact.id === id){
        return contact;
      }
    }
    return null;
   } 

   /*
   deleteContact(contact:Contact){
    delete contact.id;
   }
   */

     //NOT SURE IF THIS IS RIGHT
     getMaxId(): number{
      var maxId = 0;
      var currentId;
 
      for(const contact of this.contacts){
         currentId = +contact.id;
 
         if(currentId>maxId){
           maxId = currentId;
         }
      }
      return maxId;
    }
 
    //NOT SURE IF THIS IS RIGHT
    addContact(newContact: Contact){
      if(newContact === undefined || newContact === null){
        return;
      }
      this.maxContactId++;
      newContact.id = this.maxContactId.toString();
      this.contacts.push(newContact);
      var contactListClone = this.contacts.slice();
      this.contactListChangedEvent.next(contactListClone);
    }
 
    //NOT SURE IF RIGHT
    updateContact(originalContact:Contact, newContact:Contact){
      if(newContact === undefined || newContact === null || originalContact === undefined || originalContact === null){
        return;
      }
      var pos = this.contacts.indexOf(originalContact)
      if(pos<0){
        return;
      }
      newContact.id = originalContact.id;
      this.contacts[pos] = newContact;
      var contactListClone = this.contacts.slice();
      this.contactListChangedEvent.next(contactListClone);
    }
 
    //NOTE SURE IF RIGHT
    deleteContact(contact:Contact){
      if(contact === undefined || contact === null){
        return;
      }
 
      var pos = this.contacts.indexOf(contact);
      if(pos<0){
        return;
      }
      this.contacts.slice(pos,1);
      var contactListClone = this.contacts.slice();
      this.contactListChangedEvent.next(contactListClone);
 
    }


}
