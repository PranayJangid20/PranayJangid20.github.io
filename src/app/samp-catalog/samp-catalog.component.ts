import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-samp-catalog',
  template: `
  
  <app-catg-tittle [titleName]="catg_name" ></app-catg-tittle>
    <div class="sampCatl">

      <!-- <app-peoductwindow-large [prodName]="allProd[0]"  ></app-peoductwindow-large>
      <div class="sampProduct">
      <app-peoductwindow [prodName]="allProd[1]" ></app-peoductwindow>
      <app-peoductwindow [prodName]="allProd[2]" ></app-peoductwindow>
      </div>
      <div class="sampProduct">
      <app-peoductwindow [prodName]="allProd[3]" ></app-peoductwindow>
      <app-peoductwindow [prodName]="allProd[4]" ></app-peoductwindow>
      </div>
      <div class="sampProduct">
      <app-peoductwindow [prodName]="allProd[5]" ></app-peoductwindow>
      </div> -->
    </div>
  `,
  styleUrls: ['./sampCatl.css']
})
export class SampCatalogComponent implements OnInit {

  str = "Lorem Ipsum"

  @Input() data: any;
  @Input() catg_name: String = ''

  allProd: { id: string, name: string, img:string }[] = [];

  productsArr1 = {
    name: '',
    img: '',
    id: '',
  }
  productsArr2 = {
    name: '',
    img: '',
    id: '',
  }
  productsArr3 = {
    name: '',
    img: '',
    id: '',
  }
  productsArr4 = {
    name: '',
    img: '',
    id: '',
  }
  productsArr5 = {
    name: '',
    img: '',
    id: '',
  }

  app = initializeApp(environment.firebaseConfig);
  db;

  async getData() {
    const q = query(collection(this.db, "products"), where("pCatg", "==", this.catg_name));


    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      this.allProd.push(
        {
          'name': doc.data()['pName'],
          'img': doc.data()['pImg'][0],
          'id': doc.data()['pId'],
        }
      )
      console.log(this.allProd)
    });

    console.log(this.allProd);
    

  }


  constructor(private route: Router) {

    this.db = getFirestore(this.app);
   
  }

  ngOnInit(): void {


    console.log(this.catg_name);
     this.getData()

  }

}
interface ProductObject {
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