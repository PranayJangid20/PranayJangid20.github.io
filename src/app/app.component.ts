import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
   
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img style="height: 20px;" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" routerLink="/" routerLinkActive="active">Home Page</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" routerLink="/catagory" routerLinkActive="active">Products</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" routerLink="/about" routerLinkActive="active">About Page</a>
        </li>
        <li class="nav-item">
        <a class="nav-link active" routerLink="/login" routerLinkActive="active"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></a>
        </li>
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
}
