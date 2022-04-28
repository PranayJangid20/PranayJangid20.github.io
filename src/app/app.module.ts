import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { AppmainbannerComponent } from './appmainbanner/appmainbanner.component';
import { CatgBannerComponent } from './catg-banner/catg-banner.component';
import { CatgTittleComponent } from './catg-tittle/catg-tittle.component';
import { PeoductwindowComponent } from './peoductwindow/peoductwindow.component';
import { PeoductwindowLargeComponent } from './peoductwindow-large/peoductwindow-large.component';
import { SampCatalogComponent } from './samp-catalog/samp-catalog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CategorypageComponent } from './categorypage/categorypage.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { ProductdetailpageComponent } from './productdetailpage/productdetailpage.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { CartcomponentComponent } from './cartcomponent/cartcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    AppmainbannerComponent,
    CatgBannerComponent,
    CatgTittleComponent,
    PeoductwindowComponent,
    PeoductwindowLargeComponent,
    SampCatalogComponent,
    HomepageComponent,
    CategorypageComponent,
    ProductdetailpageComponent,
    AboutuspageComponent,
    LoginpageComponent,
    SignuppageComponent,
    CartpageComponent,
    CartcomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
