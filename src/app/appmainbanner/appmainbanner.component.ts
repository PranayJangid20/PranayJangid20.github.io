import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appmainbanner',
  template: `
    <div class="mainBnrDiv" routerLink="/catagory" routerLinkActive="active">
      <h1 class="mainBnrTxt">{{infoBnr}}</h1>
      <img class="mainBnrImg" 
    src={{imgLink}} alt="">
    </div>
  `,
  styleUrls :['./mainbanner.css'],
  
})
export class AppmainbannerComponent implements OnInit {

  constructor() { }
  @Input() imgLink:String="";
  @Input() infoBnr : String ="";
  ngOnInit(): void {
  }

}
