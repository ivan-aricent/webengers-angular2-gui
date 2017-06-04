import { Injectable } from "@angular/core";

@Injectable()
export class Chat {
    public sender:string;
    public text:string;
    
    public constructor(sender:string, text:string) {
        this.sender=sender;
        this.text=text;
    }
}