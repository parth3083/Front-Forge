import express, { Request, Response } from 'express'
import cors from 'cors'
import { config } from 'dotenv';
import { dbConnect } from './lib/db_connect';
import { compilerRouter } from './routes/compilerRouter';
const app = express();
app.use(express.json());
app.use(cors());
config();
app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hey i am parth and i am a full stack web developer");
});
dbConnect();
app.use('/compiler',compilerRouter)
app.listen(4000, () => {
    console.log("https://front-forge-8.onrender.com")
}); 