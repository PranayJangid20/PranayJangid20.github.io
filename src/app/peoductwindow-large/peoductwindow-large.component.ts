import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoductwindow-large',
  
  styleUrls:['./peoductwindow.css'],
  template: `
    <div class="windowBodyLg"  routerLink="/product" routerLinkActive="active">
   <img class="windowImgLg"
    src="https://ii1.pepperfry.com/media/catalog/product/c/a/800x880/carden-solid-wood-arm-chair-in-rustic-teak-finish---woodsworth-by-pepperfry-carden-solid-wood-arm-ch-knwykl.jpg"
    alt="">
    <div>
      <h2 class="windowNameLg">Lorem Sorem</h2>
    <div class="windowPriceLg" >
      <h6>₹799/-</h6>
      <h6  class="windowDiscLg">₹1299/-</h6>
    </div>
    </div>
    
   </div>
  `,
  styles: [
  ]
})
export class PeoductwindowLargeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
