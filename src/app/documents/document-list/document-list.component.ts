import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Document} from '../document.modle';
import {DocumentsService} from '../documents.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

documents: Document[] = [];

  constructor( private dlService: DocumentsService) {
    this.documents = this.dlService.getDocuments();
   }


  ngOnInit() {
  }

  onSelectedDocument(document:Document){
    this.dlService.documentSelectedEvent.emit(document);
  }

}
