import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Contact} from '../contacts.model';

@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Output() selectedContactEvent = new EventEmitter<Contact>();
  contacts: Contact[] = [
    new Contact('1' , 'Bro.Jackson' , 'Jacksonk@byui.edu', '208-496-3771','http://www.vrml.k12.la.us/graphorgan/18strat/strat/professor/gif/j0422581.jpg', null),
    new Contact('2', 'Bro.Barzee','barzeer@byui.edu', '208-496-3768', 'https://cdn.vox-cdn.com/thumbor/vyp4IvIKlatyZuG0DoidEqb28aI=/0x55:1079x774/1200x800/filters:focal(0x55:1079x774)/cdn.vox-cdn.com/uploads/chorus_image/image/50053909/prof_willow.0.0.jpg', null)
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelected(contact:Contact) {
    this.selectedContactEvent.emit(contact);
   }

 
}



