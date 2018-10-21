import { Injectable } from '@angular/core';
import {Message} from './message.model';
import {MOCKMESSAGES} from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {


  messages: Message[] = [];

  constructor() {
    this.messages = MOCKMESSAGES;
   }

   getMessages(){
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    
    for(let i = 0; i<this.messages.length; i++){
      if(Message[i].id === id){
        return Message[i];
      }
    }
    return null;
   }

}
