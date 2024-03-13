import { Request, Response } from 'express';
import { sample_users } from '../data';
import generateTokenResponse from '../utils/generateTokenResponse';
import asyncHandler from 'express-async-handler';
import { UserModel } from '../models/user.model';

// Seed User Data
export const seedUsers = asyncHandler(async (req, res) => {
  try {
    const usersCount = await UserModel.countDocuments();

    if (usersCount > 0) {
      res.status(200).send("User Seed is already done!");
      return;
    }

    await UserModel.create(sample_users);
    res.status(201).send("User Seed Is Created!"); // 201 for created resources
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


async function userLogin(req: Request, res: Response) {
  try {
    const {email, password} = req.body; // Destructuring Assignment
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(!user) {
      return res.status(400).send('User name or password is not valid.')
      
    } else {

      const userWithToken = generateTokenResponse(user);
      res.status(200).json(userWithToken);
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export {
  userLogin,
};