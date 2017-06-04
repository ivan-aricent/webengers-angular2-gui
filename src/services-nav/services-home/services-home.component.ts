import { Service } from './../../shared/service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-services-home',
    templateUrl: './services-home.component.html',
    styleUrls: ['./services-home.component.css']
})
export class ServicesHomeComponent {

    public serviceArray: Array<Service> = [
        {
            serviceId: "service_01",
            serviceName: "JIRA",
            serviceDesc: "service to raise JIRAs"
        },
        {
            serviceId: "service_02",
            serviceName: "JENKINS",
            serviceDesc: "service to run Jenkins job"
        },
        {
            serviceId: "service_03",
            serviceName: "RAIL",
            serviceDesc: "service to book railway tickets"
        },
        {
            serviceId: "service_04",
            serviceName: "FLIGHT",
            serviceDesc: "service to book flight tickets"
        },
        {
            serviceId: "service_05",
            serviceName: "HOTEL",
            serviceDesc: "service to book hotel rooms"
        },
        {
            serviceId: "service_06",
            serviceName: "CAB",
            serviceDesc: "service to book cab"
        }
    ];
}
