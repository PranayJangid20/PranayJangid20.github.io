import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-peoductwindow',
  styleUrls:['./peoductwindow.css'],
  template: `
   <div class="windowBody"  routerLink="/product" routerLinkActive="active">
   <img class="windowImg"
    src="https://ii1.pepperfry.com/media/catalog/product/c/a/800x880/carden-solid-wood-arm-chair-in-rustic-teak-finish---woodsworth-by-pepperfry-carden-solid-wood-arm-ch-knwykl.jpg"
    alt="">
    <h2 class="windowName">{{name}}</h2>
    <div class="windowPrice" >
      <h5 style=' color: #DC143C;'>₹799/-</h5>
      <h6  class="windowDisc">₹1299/-</h6>
    </div>
    <div class="windowBtm" >
      <h6 style=' color: green; font-size: 0.85em;'>19% Off</h6>
      
    </div>
   </div>
  `,
  styles: [
    
  ]
})
export class PeoductwindowComponent implements OnInit {

  @Input()
  name!: string; 
  constructor() { }

  ngOnInit(): void {
  }

}
