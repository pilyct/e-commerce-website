import { Request, Response } from 'express';
import { sample_foods, sample_tags, sample_users } from '../data';
import generateTokenResponse from '../utils/generateTokenResponse';

async function getFoods(req: Request, res: Response) {
  try {
    const foods = sample_foods;
    res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function searchFoods(req: Request, res: Response) {
  try {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getTags(req: Request, res: Response) {
  try {
    const tags = sample_tags;
    res.status(200).json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getFoodsByTag(req: Request, res: Response) {
  try {
    const tagName = req.params.tagName;
    const foods = sample_foods.filter(food => food.tags?.includes(tagName));
    res.status(200).json(foods);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getFoodById(req: Request, res: Response) {
  try {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId);
    res.status(200).json(food);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function userLogin(req: Request, res: Response) {
  try {
    const {email, password} = req.body; // Destructuring Assignment
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(user) {
      res.send(generateTokenResponse(user));
      res.status(200).json(user);
    } else {
      res.status(400).send('User name or password is not valid.')
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export {
  searchFoods,
  getFoods,
  getFoodById,
  getFoodsByTag,
  getTags,
  userLogin,
};
