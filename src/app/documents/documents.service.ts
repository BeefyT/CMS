import { Injectable, EventEmitter } from '@angular/core';
import {Document} from './document.modle';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  documentListChangedEvent = new Subject<Document[]>();

  documentSelectedEvent = new EventEmitter<Document>();

  documentChangedEvent = new EventEmitter<Document[]>();

  documents: Document[] = [];

  maxDocumentId: number;

  constructor() { 
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(){
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    
    for(const document of this.documents){
      if(document.id === id){
        return document;
      }
    }
    return null;
   } 

   /*
   deleteDocument(document:Document){
     if(document === null){
       return;
     }
     const pos = this.documents.indexOf(document);
     if(pos<0){
       return;
     }
     this.documents.splice(pos,1);
     this.documentChangedEvent.emit(this.documents.slice());
   }
   */

   //NOT SURE IF THIS IS RIGHT
   getMaxId(): number{
     var maxId = 0;
     var currentId;

     for(const document of this.documents){
        currentId = +document.id;

        if(currentId>maxId){
          maxId = currentId;
        }
     }
     return maxId;
   }

   //NOT SURE IF THIS IS RIGHT
   addDocument(newDocument: Document){
     if(newDocument === undefined || newDocument === null){
       return;
     }
     this.maxDocumentId++;
     newDocument.id = this.maxDocumentId.toString();
     this.documents.push(newDocument);
     var documentListClone = this.documents.slice();
     this.documentListChangedEvent.next(documentListClone);
   }

   //NOT SURE IF RIGHT
   updateDocument(originalDocument:Document, newDocument:Document){
     if(newDocument === undefined || newDocument === null || originalDocument === undefined || originalDocument === null){
       return;
     }
     var pos = this.documents.indexOf(originalDocument)
     if(pos<0){
       return;
     }
     newDocument.id = originalDocument.id;
     this.documents[pos] = newDocument;
     var documentListClone = this.documents.slice();
     this.documentListChangedEvent.next(documentListClone);
   }

   //NOTE SURE IF RIGHT
   deleteDocument(document:Document){
     if(document === undefined || document === null){
       return;
     }

     var pos = this.documents.indexOf(document);
     if(pos<0){
       return;
     }
     this.documents.slice(pos,1);
     var documentListClone = this.documents.slice();
     this.documentListChangedEvent.next(documentListClone);

   }



}
