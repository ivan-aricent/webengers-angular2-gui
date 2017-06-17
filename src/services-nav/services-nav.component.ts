import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-nav',
  templateUrl: './services-nav.component.html',
  styleUrls: ['./services-nav.component.css']
})
export class ServicesNavComponent implements OnInit {

  private toggleActive:string = "active";
  ngOnInit(){
  }

  onToggle(){
    if(this.toggleActive==="active"){
      this.toggleActive="";
    } else {
      this.toggleActive="active";
    }
  }

}
