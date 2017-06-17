import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services-new',
  templateUrl: './services-new.component.html',
  styleUrls: ['./services-new.component.css']
})
export class ServicesNewComponent {
  @ViewChild('myEntitiesNavTab') myEntitiesNavTab:ElementRef;

private myServiceInfoNavTabClass:string="active";
private myEntitiesNavTabClass:string="disabled";
private myOperationsNavTabClass:string="disabled";

private myServiceInfoNavTabExpanded:boolean=true;
private myEntitiesNavTabExpanded:boolean=false;
private myOperationsNavTabExpanded:boolean=false;

onClickNext() {
  this.myServiceInfoNavTabClass="";
  this.myServiceInfoNavTabExpanded=false;
  this.myEntitiesNavTabClass="active";
  this.myEntitiesNavTabExpanded=true;
  this.myEntitiesNavTab.nativeElement.click();
}
}
