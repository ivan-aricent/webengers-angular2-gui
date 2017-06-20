import { MessagesResponse } from './../shared/messages.response';
import { MessagesRequest } from './../shared/messages.request';
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

  public chatArray: Array<Chat>=[
  {
    sender:"bot",
    text:"welcome..."
  }
  ];

  private botProcessing:boolean = false;
  private showBr:boolean = false;

  apiAiMessageUrl: string = 'http://localhost:8888/message';
  private _restService: RestService;

  bot_img:string = "https://image.flaticon.com/icons/svg/145/145843.svg";
  me_img:string = "https://image.flaticon.com/icons/svg/145/145849.svg";

  private messageRequest:MessagesRequest;
  private messageResponse:MessagesResponse;

  private sessionUUID:string;
  private messageJsonData:string;

  private botReply:string;

constructor(restService: RestService){
  this._restService=restService;
  this.sessionUUID=sessionStorage.getItem('chatbot_admin_sessionUUID');
  this.messageRequest=new MessagesRequest(null, this.sessionUUID);
  this.messageResponse=new MessagesResponse(null, null, null);
}

  ngOnInit() {
  }

  onSendChat(chatFormTextInput:any ,sender:string, text:string){
    chatFormTextInput.value=''; //form.reset();
    // alert("chatArray==>" + this.chatArray.entries());
    this.chatArray.push(new Chat(sender,text));
    this.botProcessing = true;
    this.doAutoScroll();

    this.messageRequest.message=text;
    this.messageJsonData = JSON.stringify(this.messageRequest);

    this._restService.postJson(this.apiAiMessageUrl, this.messageJsonData).subscribe(data => {
      //  alert('ok: ' + data.text());

      this.messageResponse = JSON.parse(data.text());

      this.botReply = this.messageResponse.response;
      if(this.messageResponse.parameters != null){
        this.botReply += "\n" + this.messageResponse.parameters;
      }
      
       this.botProcessing = false;
       this.chatArray.push(new Chat("bot", this.botReply));
       this.doAutoScroll();

    }, error => {
        //alert('error: ' + error.text());
        this.botProcessing = false;
        this.chatArray.push(new Chat("bot","Oops! Something went wrong!"));
        this.doAutoScroll();
    });
    
  }

  doAutoScroll(){
    //--- for auto-scroll to bottom most chat---//
    var scrollableElement = document.getElementById('chatsDiv');
    var bottomPos = scrollableElement.scrollHeight;
    scrollableElement.scrollTop = bottomPos;
    if(bottomPos>480){
      this.showBr = true;
    }
    // ---- //
  }

}
