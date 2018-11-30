import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContactService } from '../contact.service';
import {Contact} from '../contacts.model';
import { NgForm } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'cms-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact: Contact = null;
  groupContacts: Contact[] = [];
  editMode: boolean = false;
  hasGroup: boolean = false;
  invalidGroupContact:boolean =  true;

  id: string;
  originalContact: Contact;
  


  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];

        if(this.id === undefined || this.id === null){
          this.editMode = false;
          return;
        }
        this.originalContact = this.contactService.getContact(this.id);

        if(this.originalContact === undefined || this.originalContact === null){
          return;
        }
        this.editMode = true;
        this.contact = JSON.parse(JSON.stringify(this.originalContact));

        if(this.originalContact.group != null){
         this.groupContacts = JSON.parse(JSON.stringify(this.originalContact.group));

        }
        
      }
    );
  }

  onSubmit(form: NgForm){

    const value = form.value;

   let newContact = new Contact("",value.name,value.email,value.phone,value.imageUrl,this.groupContacts);

    if(this.editMode = true){
      this.contactService.updateContact(this.originalContact, newContact);
    }
    else{
      this.contactService.addContact(newContact);
      console.log(newContact);
    }

    this.router.navigate(['/contact']);

  }

  onCancel(){
    this.router.navigate(['/contact']);
  }

  isInvalidContact(newContact: Contact){
    if(!newContact){
      return;
    }

    if(newContact.id === this.contact.id){
      return true;
    }

    for(let i = 0; i<this.groupContacts.length; i++){
      if(newContact.id === this.groupContacts[i].id){
        return true;
      }
    }
    return false;
  }

  addToGroup($event: any){
    let selectedContact: Contact = $event.dragData;
    this.invalidGroupContact = this.isInvalidContact(selectedContact);

    if(this.invalidGroupContact){
      return;
    }
    this.groupContacts.push(selectedContact);
    this.invalidGroupContact = false;
  }

  onRemoveItem(idx:number){
    if(idx<0 || idx>=this.groupContacts.length){
      return;
    }
    this.groupContacts.splice(idx,1);
    this.invalidGroupContact = false;

  }

}
