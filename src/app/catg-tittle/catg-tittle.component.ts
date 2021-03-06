import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catg-tittle',
  template: `
    <div style="display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-inline: 5em;
    border-bottom: #707070 1px solid;">
      <h3>{{titleName}}</h3>
      <a  routerLink="/catagory" [queryParams]="{ category: titleName }" routerLinkActive="active">more</a>
    </div>
  `,
  styles: [
  ]
})
export class CatgTittleComponent implements OnInit {

  @Input() titleName: String = "Angular";

  constructor() {}

  ngOnInit(): void {
  }

}
