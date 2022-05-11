import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catg-banner',
  template: `
    <div class="banrDiv">
      <div class="banrObj">
        <img class="banrImg" src={{imgLink1}} alt="">
        <h3 style="">{{infoImg2}}</h3>
      </div>
      <h1 class='bnrText' style="text-align: center;">{{infoBnr}}</h1>
              
      <div class="banrObj">
        <img class="banrImg" src={{imgLink2}} alt="">
        <h3 style="">{{infoImg1}}</h3>
      </div>
    </div>
  `,
  styleUrls:['./catgBanner.css']
})
export class CatgBannerComponent implements OnInit {

  constructor() { }
  @Input() imgLink1:String="";
  @Input() imgLink2:String="";
  @Input() infoBnr : String ="";
  @Input() infoImg1 : String ="";
  @Input() infoImg2 : String ="";
  ngOnInit(): void {
  }

}
