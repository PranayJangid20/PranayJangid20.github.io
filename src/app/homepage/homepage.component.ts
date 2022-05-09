import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { arrayUnion, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore/lite';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-homepage',
  template: `

<app-appmainbanner [imgLink]="imgLink1" [infoBnr]="bnrInfo1"></app-appmainbanner>

<div class="custom-shape-divider-top-1651076206" style="fill: #1A4C51;">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

<app-catg-banner [imgLink1]="imgLink2"[imgLink2]="imgLink3" [infoImg1]="imgInfo1"[infoImg2]="imgInfo2" [infoBnr]="bnrInfo2"></app-catg-banner>
<img src={{imgLink4}} alt="">
<app-samp-catalog *ngFor="let item of array_categ; index as i;" [catg_name]="item"  ></app-samp-catalog>



<div style="height: 5vh; background: brown;"></div>
  `,
  styles: [
  ]
})
export class HomepageComponent implements OnInit {

  app = initializeApp(environment.firebaseConfig);
  db;
  


  array_categ = [];

  productMap=new Map()

  imgLink1=""
  imgLink2=""
  imgLink3=""
  imgLink4=""
  bnrInfo1=""
  bnrInfo2=""
  imgInfo1=""
  imgInfo2=""

  contData = {}
  constructor(private route: Router) {

    this.db = getFirestore(this.app);
    this.getbannerDetail()
    this.getproducts()
  }

  async getbannerDetail(){
    const docRef = doc(this.db, "storeInfo", "storeFront");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      this.bnrInfo1 = docSnap.data()['bnrInfo1'];
      this.bnrInfo2 = docSnap.data()['bnrInfo2'];
      this.imgInfo1 = docSnap.data()['imgInfo1'];
      this.imgInfo2 = docSnap.data()['imgInfo2'];

      this.imgLink1 = docSnap.data()["img1"];
      this.imgLink2 = docSnap.data()["img2"];
      this.imgLink3 = docSnap.data()["img3"];
      this.imgLink4 = docSnap.data()["img4"];
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  
  async getproducts(){
    const docRef = doc(this.db, "storeInfo", "Catagory");
    const docSnap = await getDoc(docRef);
    this.array_categ = docSnap.data()!['catagory']
    //console.log(this.array_categ);
    this.array_categ.forEach(element => {
      this.productMap.set(element,[])
    });
    
  
    const querySnapshot = await getDocs(collection(this.db, "products"));
    querySnapshot.forEach((doc: { id: any; data: () => any; }) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      const pdo = doc.data()

      this.productMap.get(pdo.pCatg)?.push({
        'name':doc.data()['pName'],
        'img':doc.data()['pImg'],
        'id':doc.data()['pId'],
      })
      
      this.contData = {
        'name':doc.data()['pName'],
        'img':doc.data()['pImg'],
        'id':doc.data()['pId'],
      }
    })

    console.log("//////----");
    
    console.log(this.productMap.get('HOME TEMPLE')[0]);
    

    
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

class ProductClass{
  pName= "WOODEN TEMPLE";
  pQnt= 1;
  pImg= [
      "https://ucarecdn.com/84e41821-6f7d-4a18-8e6d-f7213ff2c160/",
      "https://ucarecdn.com/c3f2489a-9983-4af4-a798-083acccc3a99/",
      "https://ucarecdn.com/0234df30-02af-492c-891b-e4d2d0fa42cc/"
  ];
  pId= "DT-TEMPLE-45";
  pSdec= "WOODEN TEMPLE WITHOUT DOOR ";
  pDiff= 18;
  pRate= 2499;
  pLdec= "WOODEN TEMPLE WITHOUT DOOR WITH RINGING BELLS AND LED LIGHTING INSIDE";
  pCatg= "HOME TEMPLE";
  adDate= 1651850924174;
  pWeight= "2 KG";
  view_Insp= 0;
  pTag= [
      "wooden",
      "temple",
      "16518509241742022"
  ];
  pSize= "24X12X30 INCH";
  pMaterial= "WOOD AND MDF"
}