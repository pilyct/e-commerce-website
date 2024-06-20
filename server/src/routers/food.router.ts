import { Router } from 'express';
import {
  seedFoods,
  searchFoods,
  getFoods,
  getFoodById,
  getFoodsByTag,
  getTags,
} from '../controllers/food.controller';


const foodRouter = Router();

foodRouter.get('/seed', seedFoods);

foodRouter.get('/', getFoods);
foodRouter.get('/search/:searchTerm', searchFoods);
foodRouter.get('/tags', getTags);
foodRouter.get('/tag/:tagName', getFoodsByTag);
foodRouter.get('/:foodId', getFoodById);

export default foodRouter;

