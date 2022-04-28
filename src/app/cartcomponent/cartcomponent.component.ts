import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartcomponent',
  template: `
    <div class="cartBody">
      <img class="cartImg" src="https://ii1.pepperfry.com/media/catalog/product/c/a/800x880/carden-solid-wood-arm-chair-in-rustic-teak-finish---woodsworth-by-pepperfry-carden-solid-wood-arm-ch-knwykl.jpg" alt="">
      <div class="infoBody"> <h1>Lorem ipsum</h1><h3 class="cartDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque inventore facilis reprehenderit ipsa, sapiente hic excepturi commodi ab perferendis.</h3></div>
      <div class="priceBody"><h2>₹599/-</h2><button class="btn btn-link" style="color: red;">REMOVE</button></div>
    </div>
  `,
  styleUrls: [ './cartPage.css'
  ]
})
export class CartcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
