import { Component, OnInit } from '@angular/core';
import {Message} from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages:Message[]=[
    new Message("Ty","Hello","How are you?","Tyler"),
    new Message("Cyd", "Pay me!", "I need money","Cyd"),
    new Message("Scott","How's School?","Hope school is going well", "Scott"),

  ];

  constructor() { }

  ngOnInit() {
  }

  addOnMessage(message:Message){
    this.messages.push(message);
  }


}
