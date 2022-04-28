import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appmainbanner',
  template: `
    <div class="mainBnrDiv">
      <h1 class="mainBnrTxt">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur</h1>
      <img class="mainBnrImg" 
    src="https://ii1.pepperfry.com/media/catalog/product/c/a/800x880/carden-solid-wood-arm-chair-in-rustic-teak-finish---woodsworth-by-pepperfry-carden-solid-wood-arm-ch-knwykl.jpg" alt="">
    </div>
  `,
  styleUrls :['./mainbanner.css'],
  
})
export class AppmainbannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
