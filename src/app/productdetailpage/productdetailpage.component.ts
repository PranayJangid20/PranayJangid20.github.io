import { Component, OnInit } from '@angular/core';

@Component({
  
  selector: 'app-productdetailpage',
  template: `
    
  `,
  templateUrl:'./productDetail.html',
  styleUrls:['./productDetail.css'],
  styles: [
  ]
})
export class ProductdetailpageComponent implements OnInit {

  constructor() { }

  mainImage = 'https://ii1.pepperfry.com/media/catalog/product/t/h/494x544/the-begum-wing-chair-floral-swirls-in-multicoloured-by-chumbak-the-begum-wing-chair-floral-swirls-in-yvsovt.jpg'

  ngOnInit(): void {
  }

}
