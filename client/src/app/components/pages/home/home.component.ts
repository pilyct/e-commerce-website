import { Component, OnInit, Inject } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, RouterLink, SearchComponent, TagsComponent, NotFoundComponent]
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    @Inject(FoodService) private foodService: FoodService,
    @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
      this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
      this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
      this.foods = this.foodService.getAll();
      
    });
  }

  onMouseEnter(food: Food): void {
    food.isHovered = true;
  }

  onMouseLeave(food: Food): void {
    food.isHovered = false;
  }
}

