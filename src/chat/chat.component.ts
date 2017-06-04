import { RestService } from './../app/rest.service';
import { Chat } from './../shared/chat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [RestService]
})
export class ChatComponent implements OnInit {

// chatArray = [
//   {
//     sender:String,
//     text:String
//   }
// ]

  // chat:Chat;
  public chatArray: Array<Chat>=[
  {
    sender:"bot",
    text:"welcome..."
  }
  ];


  apiAiMessageUrl: string = 'http://localhost:8888/message';
  private _restService: RestService;

constructor(restService: RestService){
  this._restService=restService;
}

  ngOnInit() {
  }

  onSendChat(chatFormTextInput:any ,sender:string, text:string){
    chatFormTextInput.value=''; //form.reset();
    this.chatArray.push(new Chat(sender,text));
    // alert("chatArray==>" + this.chatArray.entries());
    

    this._restService.postJson(this.apiAiMessageUrl, text).subscribe(data => {
      //this.loginApiResponse = data.text();
      //  alert('ok: ' + data.text());
       this.chatArray.push(new Chat("bot",data.text()));

    }, error => {
        alert('error: ' + error.text());
    });


  }

}
