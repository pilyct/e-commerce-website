import { Routes } from '@angular/router';
import { HeaderComponent } from './components/partials/header/header.component';

export const routes: Routes = [
  { path: 'login', component: HeaderComponent },
  { path: 'dashboard', component: HeaderComponent },
  { path: 'profile', component: HeaderComponent },
  { path: 'orders', component: HeaderComponent },
  { path: 'cart', component: HeaderComponent },
];
