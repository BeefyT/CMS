import { Component, OnInit} from '@angular/core';
import {Contact} from '../contacts.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WindRefService } from 'src/app/wind-ref.service';


@Component({
  selector: 'cms-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
contact: Contact;
id: string;
nativeWindow: any;


  constructor(
    private ContactService: ContactService,
    private WindowRefService: WindRefService,
    private router:Router,
    private route:ActivatedRoute) {
      this.nativeWindow = WindowRefService.getNativeWindow();
     }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = params['id'];
          
            this.contact = this.ContactService.getContact(this.id);
            console.log(this.contact);
          }
        );
  }

  onDelete(contact){
    this.ContactService.deleteContact(this.contact);
    this.router.navigate(['/contact']);
  }

}
