import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { CartcomponentComponent } from './cartcomponent/cartcomponent.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProductdetailpageComponent } from './productdetailpage/productdetailpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'catagory',
    component:CategorypageComponent
  },
  {
    path:'product',
    component:ProductdetailpageComponent
  },
  {
    path:'about',
    component:AboutuspageComponent
  },
  // {
  //   path:'login',
  //   component:LoginpageComponent
  // },
  // {
  //   path:'signup',
  //   component:SignuppageComponent
  // },
  // {
  //   path:'cart',
  //   component:CartpageComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
