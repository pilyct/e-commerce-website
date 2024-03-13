import { Router } from 'express';
import { seedUsers, userLogin } from '../controllers/user.controller';

const usersRouter = Router();

usersRouter.get('/seed', seedUsers);

usersRouter.post('/login', userLogin);

export default usersRouter;