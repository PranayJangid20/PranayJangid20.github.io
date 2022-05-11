import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-peoductwindow',
  styleUrls:['./peoductwindow.css'],
  template: `
   <div class="windowBody"  routerLink="/product" [queryParams]="{ product: prodName['id'] }"  routerLinkActive="active">
   <img class="windowImg"
    src="{{prodName['img']}}"
    alt="">
    <h2 class="windowName" style="max-width: 180px;">{{prodName['name']}}</h2>
    <!-- <div class="windowPrice" >
      <h5 style=' color: #DC143C;'>₹799/-</h5>
      <h6  class="windowDisc">₹1299/-</h6>
    </div>
    <div class="windowBtm" >
      <h6 style=' color: green; font-size: 0.85em;'>19% Off</h6>
      
    </div> -->
   </div>
  `,
  styles: [
    
  ]
})
export class PeoductwindowComponent implements OnInit {

  @Input()prodName!: { id: string, name: string, img:string };
  constructor() { 
    console.log(this.prodName);
    
  }

  ngOnInit(): void {
  }

}
interface ProductObject{
  pName: "WOODEN TEMPLE",
  pQnt: 1,
  pImg: [
      "https://ucarecdn.com/84e41821-6f7d-4a18-8e6d-f7213ff2c160/",
      "https://ucarecdn.com/c3f2489a-9983-4af4-a798-083acccc3a99/",
      "https://ucarecdn.com/0234df30-02af-492c-891b-e4d2d0fa42cc/"
  ],
  pId: "DT-TEMPLE-45",
  pSdec: "WOODEN TEMPLE WITHOUT DOOR ",
  pDiff: 18,
  pRate: 2499,
  pLdec: "WOODEN TEMPLE WITHOUT DOOR WITH RINGING BELLS AND LED LIGHTING INSIDE",
  pCatg: "HOME TEMPLE",
  adDate: 1651850924174,
  pWeight: "2 KG",
  view_Insp: 0,
  pTag: [
      "wooden",
      "temple",
      "16518509241742022"
  ],
  pSize: "24X12X30 INCH",
  pMaterial: "WOOD AND MDF"
}