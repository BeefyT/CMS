import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DocumentsService } from '../documents.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Document} from '../document.modle';





@Component({
  selector: 'cms-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {

  originalDocument: Document;
  document: Document;
  editMode: boolean = false;
  id: string;

  constructor(
    private documentService: DocumentsService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params) => {
            this.id = params['id'];

            if(this.id === undefined || this.id === null){
              this.editMode = false;
              return;
            }
            this.originalDocument = this.documentService.getDocument(this.id);

            if(this.originalDocument === undefined || this.originalDocument === null){
              return;
            }
            this.editMode = true;
            this.document = JSON.parse(JSON.stringify(this.originalDocument));
            
          }
        );

  }

  onSubmit(form: NgForm){
    let name = form.value.userData.title;
    let description = form.value.userData.description;
    let url = form.value.userData.documentUrl;

    let newDocument = new Document("",name,description,url,null);

    if(this.editMode = true){
      this.documentService.updateDocument(this.originalDocument, newDocument);
    }
    else{
      this.documentService.addDocument(newDocument);
    }

    this.router.navigate(['/documents']);

  }

  onCancel(){
    this.router.navigate(['/documents']);
  }

}
