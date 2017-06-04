import { Injectable } from "@angular/core";

@Injectable()
export class Service {
    public serviceId:string;
    public serviceName:string;
    public serviceDesc:string;
    
    public constructor(serviceId:string, serviceName:string, serviceDesc:string) {
        this.serviceId=serviceId;
        this.serviceName=serviceName;
        this.serviceDesc=serviceDesc;
    }
}