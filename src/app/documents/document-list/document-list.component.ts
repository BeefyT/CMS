import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Document} from '../document.modle';
import {DocumentsService} from '../documents.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';


@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

documents: Document[] = [];
documentId: String = '';

private subscription: Subscription;


  constructor( private documentService: DocumentsService) {
    this.documents = this.documentService.getDocuments();
   }



 /* 
  ngOnInit() {
    this.documentService.documentChangedEvent

    .subscribe(
    (documents: Document[])=>{
      this.documents = documents;
    }
    );
  }*/

  

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
    this.subscription = this.documentService.documentListChangedEvent
      .subscribe(
        (documentsList: Document[]) => {
          this.documents = documentsList;
        }
      );
  }

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
    
