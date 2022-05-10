import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";
import { environment } from 'src/environments/environment';

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

  constructor() {
    
    this.db = getFirestore(this.app);
   }

  productId=''
  productName = ''
  productDesc = ''
  productLDesc = ''
  productType = ''
  productWeight = ''
  productSize = ''
  productCatg = ''
  productImage = []

  mainImage = 'https://ii1.pepperfry.com/media/catalog/product/t/h/494x544/the-begum-wing-chair-floral-swirls-in-multicoloured-by-chumbak-the-begum-wing-chair-floral-swirls-in-yvsovt.jpg'
  app = initializeApp(environment.firebaseConfig);
  db: any;
  async getProductDetail(){
    const q = query(collection(this.db, "products"), where("pId", "==", this.productId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      this.mainImage = doc.data()['pImg'][0]
      this.productImage = doc.data()['pImg']
      this.productName = doc.data()['pName']
      this.productLDesc = doc.data()['pLdec']
      this.productDesc = doc.data()['pSdec']
      this.productType = doc.data()['pType']
      this.productWeight = doc.data()['pWeight']
      this.productSize = doc.data()['pSize']
      this.productCatg = doc.data()['pCatg']
    });
  }

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams.get('product'))
    this.productId = urlParams.get('product') as string

    this.getProductDetail()
  }

}
