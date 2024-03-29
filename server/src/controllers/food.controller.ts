import { Request, Response } from 'express';
import { sample_foods, sample_tags } from '../data';
import asyncHandler from 'express-async-handler';
import { FoodModel } from '../models/food.model';


// Seed Food Data
export const seedFoods = asyncHandler(async (req, res) => {
  try {
    const foodsCount = await FoodModel.countDocuments();

    if (foodsCount > 0) {
      res.status(200).send("Food Seed is already done!");
      return;
    }

    await FoodModel.create(sample_foods);
    res.status(201).send("Food Seed Is Created!"); // 201 for created resources
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


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



export {
  searchFoods,
  getFoods,
  getFoodById,
  getFoodsByTag,
  getTags,
};