import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from './contacts.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';

@Pipe({
  name: 'contactsFilter'
})

export class ContactsFilterPipe implements PipeTransform {

  transform(contacts: Contact[], [term]): any {

    let filteredArray: Contact[] = [];

    filteredArray = contacts.filter(
      (contact:any) => contact.name.includes(term)
    );

    if(filteredArray.length < 1){
      return contacts;
    }
    return filteredArray;
  }

}
