import { Injectable } from "@angular/core";

@Injectable()
export class MessagesResponse {
    public response:string;
    public parameters:string;
    public complete:boolean;
    
    public constructor(response:string, parameters:string, complete:boolean) {
        this.response=response;
        this.parameters=parameters;
        this.complete=complete;
    }
}