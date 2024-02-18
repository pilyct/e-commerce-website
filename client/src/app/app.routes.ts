import { Routes } from '@angular/router';
// import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search/:searchTerm', component: HomeComponent},
  {path: 'tag/:tag', component: HomeComponent},
  {path: 'food/:id', component: FoodPageComponent},
  // { path: 'login', component: HeaderComponent },
  // { path: 'dashboard', component: HeaderComponent },
  // { path: 'profile', component: HeaderComponent },
  // { path: 'orders', component: HeaderComponent },
  // { path: 'cart', component: HeaderComponent },
];
