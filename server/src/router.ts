import { Router } from 'express';
import {
  searchFoods,
  getFoods,
  getFoodById,
  getFoodsByTag,
  getTags,
  userLogin,
} from './controllers/dataController';


const router = Router();

router.get('/api/foods', getFoods);
router.get('/api/foods/search/:searchTerm', searchFoods);
router.get('/api/foods/tags', getTags);
router.get('/api/foods/tag/:tagName', getFoodsByTag);
router.get('/api/foods/:foodId', getFoodById);

router.post('/api/users/login', userLogin);

export default router;