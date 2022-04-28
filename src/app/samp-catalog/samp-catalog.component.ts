import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samp-catalog',
  template: `
  
  <app-catg-tittle ></app-catg-tittle>
    <div class="sampCatl">

      <app-peoductwindow-large></app-peoductwindow-large>
      <div class="sampProduct">
      <app-peoductwindow [name]='str' ></app-peoductwindow>
      <app-peoductwindow [name]='str' ></app-peoductwindow>
      </div>
      <div class="sampProduct">
      <app-peoductwindow [name]='str' ></app-peoductwindow>
      <app-peoductwindow [name]='str' ></app-peoductwindow>
      </div>
      <div class="sampProduct">
      <app-peoductwindow [name]='str' ></app-peoductwindow>
      <app-peoductwindow [name]='str' ></app-peoductwindow>
      </div>
    </div>
  `,
  styleUrls: ['./sampCatl.css'
  ]
})
export class SampCatalogComponent implements OnInit {

  str = "Lorem Ipsum"


  
  data = [
    {
      name :'lorem Sorem',
      rate: '200',
      disc:'300',
    },
    {
      name :'sorem lorem',
      rate: '500',
      disc:'700',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
