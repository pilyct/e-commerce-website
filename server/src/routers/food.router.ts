import { Router } from 'express';
import {
  seedFoods,
  searchFoods,
  getFoods,
  getFoodById,
  getFoodsByTag,
  getTags,
} from '../controllers/food.controller';


const foodsRouter = Router();

foodsRouter.get('/seed', seedFoods);

foodsRouter.get('/', getFoods);
foodsRouter.get('/search/:searchTerm', searchFoods);
foodsRouter.get('/tags', getTags);
foodsRouter.get('/tag/:tagName', getFoodsByTag);
foodsRouter.get('/:foodId', getFoodById);

export default foodsRouter;

