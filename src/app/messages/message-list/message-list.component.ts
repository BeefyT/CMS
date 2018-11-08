import { Component, OnInit } from '@angular/core';
import {Message} from '../message.model';
import {MessagesService} from '../messages.service';
import { Params, Route, Router } from '@angular/router';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[]=[];

  constructor(private messageService: MessagesService) {
    this.messages = this.messageService.getMessages();
   }

  ngOnInit() {
    //this.route.params
       // .subscribe(
          //(params: Params) => {
           // this.id = params['id'];
          
           // this.messages = this.messageService.getMessages(this.id);
           // console.log(this.messages);
         // }
       // );
  }

  //addOnMessage(message:Message){
  //  this.messages.push(message);
  //}


}
