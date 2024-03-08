import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../shared/models/Cart';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  cart!:Cart;
  user!:User;

  constructor(
    private cartService: CartService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })

    this.userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
  
}


