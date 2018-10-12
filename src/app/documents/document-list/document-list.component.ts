import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Document} from '../document.modle';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

documents: Document[] = [
  new Document("Ty","Tyler","This is a short story written by Tyler","www.tylersdoc1.com", null),
  new Document("Cyd","Cydney","A small narative of the adventures of Cyd","www.tylersdoc2.com", null),
  new Document("Wendy","Wendy","All my tasty recipes","www.tylersdoc3.com", null),
  new Document("Scotter","Scott","The idiots guide to boxing","www.tylersdoc4.com", null),
  new Document("Dixie","Dixie","how to be a good doggo","www.tylersdoc5.com", null)
];

  constructor() { }

  ngOnInit() {
  }

  onSelectedDocument(document:Document){
    this.selectedDocumentEvent.emit(document);
  }

}
