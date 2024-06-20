import { Router } from 'express';
import { seedUsers, userLogin } from '../controllers/user.controller';

const userRouter = Router();

userRouter.get('/seed', seedUsers);

userRouter.post('/login', userLogin);

export default userRouter;