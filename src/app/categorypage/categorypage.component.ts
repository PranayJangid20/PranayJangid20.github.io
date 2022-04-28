import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorypage',
  template: `
    
  `,
  templateUrl :'./categorypage.html',
  styleUrls:['./categoryStyle.css'],
  
})
export class CategorypageComponent implements OnInit {
  value: number = 250;
  highValue: number = 5000;
  options: Options = {
    floor: 0,
    ceil: 10000,
    step :50
  };

  productName = ['Aklk','Lorem','Sorem','Mike','Chales']

  constructor() { }

  ngOnInit(): void {
  }

}
