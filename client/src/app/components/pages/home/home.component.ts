import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {}
  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

  onMouseEnter(food: Food): void {
    food.isHovered = true;
  }
  onMouseLeave(food: Food): void {
    food.isHovered = false;
  }
}
