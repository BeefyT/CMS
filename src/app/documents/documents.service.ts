import { Injectable, EventEmitter } from '@angular/core';
import {Document} from './document.modle';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { nextTick } from 'q';




@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  documentListChangedEvent = new Subject<Document[]>();

  documentSelectedEvent = new EventEmitter<Document>();

  //documentChangedEvent = new EventEmitter<Document[]>();

  documents: Document[] = [];

  maxDocumentId: number;

  constructor(private http: HttpClient, private DocumentService: DocumentsService) { 
    //this.documents = MOCKDOCUMENTS;
    //this.maxDocumentId = this.getMaxId();
    
  }

  storeDocuments(documents:Document[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.put('https://cms-it.firebaseio.com/documents.json',
    documents,
     {headers:headers})
     .subscribe(
       (response: Response) => {
         this.documentListChangedEvent.next(documents.slice());
       }
     );

  }

  getDocuments(){
    //return this.documents.slice();

    this.http.get('https://cms-it.firebaseio.com/documents.json')
    .subscribe(
      (documents: Document[]) => {
        this.documents = documents;
        this.maxDocumentId = this.getMaxId();
        documents.sort((a,b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1 : 0);
        this.documentListChangedEvent.next(this.documents.slice());

        //DONT UNDERSTAND THE EMIT PART
      },

      //ERROR FUNCTION
      (error:any)=>{
        console.log("Error");
      }
    )
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
     let documentListClone = this.documents.slice();
     this.storeDocuments(documentListClone);
   }

   //NOT SURE IF RIGHT
   updateDocument(originalDocument:Document, newDocument:Document){
     if(newDocument === undefined || newDocument === null || originalDocument === undefined || originalDocument === null){
       return;
     }
     let pos = this.documents.indexOf(originalDocument)

     if(pos<0){
       return;
     }

     newDocument.id = originalDocument.id;
     this.documents[pos] = newDocument;
     var documentListClone = this.documents.slice();
     this.storeDocuments(documentListClone);

   }

   //NOTE SURE IF RIGHT
   deleteDocument(document:Document){
     if(document === undefined || document === null){
       return;
     }

     let pos = this.documents.indexOf(document);
     
     if(pos<0){
       return;
     }

     this.documents.slice(pos,1);
     var documentListClone = this.documents.slice();
     this.storeDocuments(documentListClone);

   }






}
