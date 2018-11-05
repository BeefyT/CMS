import { NgModule} from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import {DocumentsComponent} from "../app/documents/documents.component";
import {MessageListComponent} from "../app/messages/message-list/message-list.component";
import {ContactsComponent} from "../app/contacts/contacts.component";
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import {DocumentListComponent} from './documents/document-list/document-list.component';


const app_Routes: Routes = [

    {path: "", redirectTo: "/documents", pathMatch: 'full'},
    {path: "documents", component: DocumentsComponent, children: [
        { path: 'new', component: DocumentEditComponent },
        { path: ':id', component: DocumentDetailComponent },
        { path: ':id/edit', component: DocumentEditComponent },
    ]},

    {path: "messages", component: MessageListComponent},
    {path: "contact", component: ContactsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(app_Routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
