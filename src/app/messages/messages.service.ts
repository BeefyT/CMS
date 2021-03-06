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
    
    for(const message of this.messages){
      if(message.id === id){
        return message;
      }
    }
    return null;
   }

   getMaxId(): number{
    var maxId = 0;
    var currentId;

    for(const message of this.messages){
       currentId = +message.id;

       if(currentId>maxId){
         maxId = currentId;
       }
    }
    return maxId;
  }

}
