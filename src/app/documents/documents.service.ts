import { Injectable, EventEmitter } from '@angular/core';
import {Document} from './document.modle';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  documentSelectedEvent = new EventEmitter<Document>();

  documents: Document[] = [];

  constructor() { 
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(){
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    
    for(let i = 0; i<this.documents.length; i++){
      if(Document[i].id === id){
        return Document[i];
      }
    }
    return null;
   } 

}
