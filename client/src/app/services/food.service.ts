import { Injectable } from '@angular/core';
import { sample_foods } from '../../data';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getAll():Food[]{
    return sample_foods;
  }
  
  constructor() { 
  }
}
