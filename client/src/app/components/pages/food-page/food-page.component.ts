import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, RouterLink, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {
  food!: Food;
  selectedImageIndex: number = 0;

  constructor(
    @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute,
    @Inject(FoodService) private foodService: FoodService,
    @Inject(CartService) private cartService: CartService,
    @Inject(Router) private router:Router,

  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'])
      this.food = this.foodService.getFoodById(params['id']);
    })
  }

  selectMainImage(index: number): void {
    this.selectedImageIndex = index;
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
  
}
