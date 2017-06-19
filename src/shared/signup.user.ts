import { Injectable } from "@angular/core";

@Injectable()
export class SignupUser {
    public username: string;
    public password: string;
    // For future:
    // public secretQuestion: string;
    // public secretQuesAnswer: string;
    
    public constructor() { }
}