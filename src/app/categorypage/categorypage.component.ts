import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { collection, Firestore, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  catg:any
  allProd: { id: string, name: string, img:string }[] = [];

  productName = ['Aklk','Lorem','Sorem','Mike','Chales']
  service: any;

  app = initializeApp(environment.firebaseConfig);
  db!: Firestore;
  constructor(private route: ActivatedRoute,
    private router: Router) { 
      this.db = getFirestore(this.app);
    }

    

  async getData() {
    const q = query(collection(this.db, "products"), where("pCatg", "==", this.catg));

    console.log('getting data');
    

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.size);
    
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
      
    });

    
    

  }

  ngOnInit(): void {
    //this.catg = this.route.snapshot.params['category'];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.catg = urlParams.get('category')
    // this.catg = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.catg = params.get('category');
    //     console.log(params.keys);
        
    //     return this.service.getHeroes();
    //   })
    // );

    console.log(this.catg);

    this.getData()
    
  }

}
