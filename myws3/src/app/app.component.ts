import { Component, Input, OnInit } from '@angular/core';
import { WebsocketService } from "./websocket.service";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CommandHadoop } from './command-hadoop';
//import commands from './commands.json';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [WebsocketService]
})

export class AppComponent{

  commands_list: CommandHadoop[] =  require('./commands.json');
  title = 'socketrv';
  content:    string = '';
  received:   any[]  = [];
  sent:       any[]  = [];
  areatxt=""

  onchangeareatxt() {
    this.content = this.areatxt;
  }

  chosedCmd(value: string){
    this.areatxt=value
  }

  constructor(private WebsocketService: WebsocketService) {
    WebsocketService.messages.subscribe(msg => {
      msg.content=decode(msg.content)+"<br>"
      this.received.push(msg)
      console.log("Response from websocket: " + msg)
    });
    var decode = require('unescape');
    console.log(decode('&lt;div&gt;abc&lt;/div&gt;'));
    console.log(decode.chars)
  }

  sendMsg() {
    let message = {
      source: '',
      content: ''
    };
    message.source = 'localhost';
    message.content = this.content;
    console.log("ciontent:"+this.content)

    this.sent.push(message);
    this.WebsocketService.messages.next(message);
  }
  clearReceived(){
    this.received = [];
  }
  clearSent(){
    this.sent = [];
  }
}

