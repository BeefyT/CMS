import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import{Message} from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject') subjectInputRef: ElementRef;
  @ViewChild('msgText') msgTextInputRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender: string = "1";

  constructor() { }

  ngOnInit() {
  }

  onSendMessage(){
    const ingSubject = this.subjectInputRef.nativeElement.value;
    const ingMsgText = this.msgTextInputRef.nativeElement.value;
    const newMessage = new Message ("Ty",ingSubject, ingMsgText, this.currentSender);
    this.addMessageEvent.emit(newMessage);

  }

  onClear(){
    

  }

}

