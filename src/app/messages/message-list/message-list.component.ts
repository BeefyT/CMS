import { Component, OnInit } from '@angular/core';
import {Message} from '../message.model';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[]=[];

  constructor(private mlService: MessagesService) {
    this.messages = this.mlService.getMessages();
   }

  ngOnInit() {
  }

  addOnMessage(message:Message){
    this.messages.push(message);
  }


}
