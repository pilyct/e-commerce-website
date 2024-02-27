import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from "../../partials/search/search.component";
import { TagsComponent } from "../../partials/tags/tags.component";
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';

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
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {
    let foodsObservable: Observable<Food[]>;

    this.activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
      foodsObservable = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
      foodsObservable = this.foodService.getAllFoodsByTag(params['tag']);
      else
      foodsObservable = this.foodService.getAll();


      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
      
    });
  }

  onMouseEnter(food: Food): void {
    food.isHovered = true;
  }

  onMouseLeave(food: Food): void {
    food.isHovered = false;
  }
}

