import express from 'express';
import cors from 'cors';
import router from './router'

const app = express();

app.use(cors({
  credentials:true,
  origin:['http://localhost:4200']
}));

app.use(express.json());
app.use(router);



const port = 5000;
app.listen(port, () => {
    console.log("🎪 Website served on http://localhost:" + port + " 🎪");
})
