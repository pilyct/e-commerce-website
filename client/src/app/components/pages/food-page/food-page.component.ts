import { Component, Inject, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(
    @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute,
    @Inject(FoodService) private foodService: FoodService,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id'])
      this.food = this.foodService.getFoodById(params['id']);
    })
  }

  
}
