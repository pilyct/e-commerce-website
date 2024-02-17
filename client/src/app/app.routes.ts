import { Routes } from '@angular/router';
// import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:searchTerm', component: HomeComponent},
  {path: 'tag/:tag', component: HomeComponent},
  // { path: 'login', component: HeaderComponent },
  // { path: 'dashboard', component: HeaderComponent },
  // { path: 'profile', component: HeaderComponent },
  // { path: 'orders', component: HeaderComponent },
  // { path: 'cart', component: HeaderComponent },
];
