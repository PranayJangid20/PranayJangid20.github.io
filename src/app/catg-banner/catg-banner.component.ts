import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catg-banner',
  template: `
    <div class="banrDiv">
      <div class="banrObj">
        <img class="banrImg" src="https://ii1.pepperfry.com/media/catalog/product/c/a/800x880/carden-solid-wood-arm-chair-in-rustic-teak-finish---woodsworth-by-pepperfry-carden-solid-wood-arm-ch-knwykl.jpg" alt="">
        <h3 style="">Lorem /n Sorem</h3>
      </div>
      <h1 class='bnrText'>Skilled hands at work</h1>
              
      <div class="banrObj">
        <img class="banrImg" src="https://ii1.pepperfry.com/media/catalog/product/c/a/800x880/carden-solid-wood-arm-chair-in-rustic-teak-finish---woodsworth-by-pepperfry-carden-solid-wood-arm-ch-knwykl.jpg" alt="">
        <h3 style="">Lorem /n Sorem</h3>
      </div>
    </div>
  `,
  styleUrls:['./catgBanner.css']
})
export class CatgBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
