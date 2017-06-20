import { Injectable } from "@angular/core";

@Injectable()
export class MessagesRequest {
    public message:string;
    public sessionId:string;
    
    public constructor(message:string, sessionId:string) {
        this.message=message;
        this.sessionId=sessionId;
    }
}