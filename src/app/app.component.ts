import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img style="height: 20px;" src="https://ucarecdn.com/00080a7e-6e6e-4ef6-b3cf-4e680c94e861/" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" routerLink="/" routerLinkActive="active">Home Page</a>
        </li>
        <!-- <li class="nav-item">
        <a class="nav-link active" routerLink="/catagory" routerLinkActive="active">Products</a>
        </li> -->
        <li class="nav-item">
        <a class="nav-link active" routerLink="/about" routerLinkActive="active">About Page</a>
        </li>
        <!-- <li class="nav-item">
        <a class="nav-link active" routerLink="/login" routerLinkActive="active">Profile</a>
        </li> -->
      </ul>
    </div>
  </div>
</nav>
    <router-outlet></router-outlet>
  `,
  styles: [

  ]
})
export class AppComponent {
  title = 'my-aprile-site';
  constructor(){
    const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

  }
}
