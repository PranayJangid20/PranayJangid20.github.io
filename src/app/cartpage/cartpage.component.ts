import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartpage',
  template: `
    <div><h2 style="font-size: 1.4em;
    margin-inline: 50px;
    font-family: ui-monospace;
    margin-top: 20px;
    ">SHOPPING CART</h2></div>
    <app-cartcomponent></app-cartcomponent>
    <app-cartcomponent></app-cartcomponent>
    <app-cartcomponent></app-cartcomponent>
    <app-cartcomponent></app-cartcomponent>
  `,
  styles: [
  ]
})
export class CartpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
