import { Routes } from '@angular/router';
// import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:searchTerm', component: HomeComponent},
  {path: 'tag/:tag', component: HomeComponent},
  {path: 'food/:id', component: FoodPageComponent},
  {path: 'cart-page', component: CartPageComponent},
  // { path: 'login', component: HeaderComponent },
  // { path: 'dashboard', component: HeaderComponent },
  // { path: 'profile', component: HeaderComponent },
  // { path: 'orders', component: HeaderComponent },
  // { path: 'cart', component: HeaderComponent },
];
