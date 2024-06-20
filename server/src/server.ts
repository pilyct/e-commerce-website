import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
// import router from './router'
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import { dbConnect } from './models/database.congif';

const app = express();

app.use(cors({
  credentials:true,
  origin:['http://localhost:4200']
}));

app.use(express.json());

// app.use(router);
app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);


dbConnect();



const port = 5000;
app.listen(port, () => {
    console.log("🎪 Website served on http://localhost:" + port + " 🎪");
})
